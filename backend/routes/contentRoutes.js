import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import Content from '../models/Content.js';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'nyota_content',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});

const upload = multer({ storage });
const router = express.Router();

// POST /api/content: upload image + metadata
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description, page, section } = req.body;
    let imageUrl = null;
    let public_id = null;
    if (req.file && req.file.path) {
      imageUrl = req.file.path;
      public_id = req.file.filename;
    }
    const content = new Content({
      title,
      description,
      page,
      section,
      imageUrl,
      public_id,
    });
    await content.save();
    res.status(201).json(content);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/content?page=...&section=...
router.get('/', async (req, res) => {
  try {
    const { page, section } = req.query;
    const filter = {};
    if (page) filter.page = page;
    if (section) filter.section = section;
    const contents = await Content.find(filter).sort({ createdAt: -1 });
    res.json(contents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/content/:id
router.delete('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) return res.status(404).json({ error: 'Not found' });
    if (content.public_id) {
      await cloudinary.uploader.destroy(content.public_id);
    }
    await content.deleteOne();
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
