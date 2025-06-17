import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = ({ page, section }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchContent = async () => {
    setLoading(true);
    setError('');
    try {
      const params = {};
      if (page) params.page = page;
      if (section) params.section = section;
      const res = await axios.get('/api/v1/content', { params });
      setItems(res.data);
    } catch (err) {
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
    // eslint-disable-next-line
  }, [page, section]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this entry?')) return;
    try {
      await axios.delete(`/api/v1/content/${id}`);
      setItems(items.filter(item => item._id !== id));
    } catch {
      alert('Delete failed');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
      {items.map(item => (
        <div key={item._id} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, width: 250, position: 'relative' }}>
          {item.imageUrl && <img src={item.imageUrl} alt={item.title} style={{ width: '100%', maxHeight: 150, objectFit: 'cover', borderRadius: 4 }} />}
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <small>Page: {item.page} | Section: {item.section}</small>
          <button onClick={() => handleDelete(item._id)} style={{ position: 'absolute', top: 8, right: 8, background: '#f44', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Delete</button>
        </div>
      ))}
      {items.length === 0 && <div>No content found.</div>}
    </div>
  );
};

export default ImageGallery;
