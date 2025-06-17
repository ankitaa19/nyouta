import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  page: { type: String, required: false },
  section: { type: String, required: false },
  imageUrl: { type: String, required: false },
  public_id: { type: String, required: false },
}, { timestamps: true });

export default mongoose.model('Content', contentSchema);
