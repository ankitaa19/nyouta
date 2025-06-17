import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadForm = ({ onUpload }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    page: '',
    section: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
      setPreview(files[0] ? URL.createObjectURL(files[0]) : null);
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('description', form.description);
      formData.append('page', form.page);
      formData.append('section', form.section);
      if (form.image) formData.append('image', form.image);
      const res = await axios.post('/api/v1/content', formData);
      setForm({ title: '', description: '', page: '', section: '', image: null });
      setPreview(null);
      if (onUpload) onUpload(res.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '1rem auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="page" placeholder="Page" value={form.page} onChange={handleChange} />
      <input name="section" placeholder="Section" value={form.section} onChange={handleChange} />
      <input type="file" name="image" accept="image/*" onChange={handleChange} />
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: 200 }} />}
      <button type="submit" disabled={loading}>{loading ? 'Uploading...' : 'Upload'}</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default ImageUploadForm;
