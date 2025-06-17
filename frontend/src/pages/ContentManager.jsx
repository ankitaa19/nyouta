import React, { useState } from 'react';
import ImageUploadForm from '../components/ImageUploadForm';
import ImageGallery from '../components/ImageGallery';

const ContentManager = () => {
  const [page, setPage] = useState('');
  const [section, setSection] = useState('');
  const [refresh, setRefresh] = useState(0);

  return (
    <div style={{ maxWidth: 800, margin: '2rem auto' }}>
      <h2>Content Manager</h2>
      <ImageUploadForm onUpload={() => setRefresh(r => r + 1)} />
      <div style={{ display: 'flex', gap: 8, margin: '1rem 0' }}>
        <input placeholder="Filter by page" value={page} onChange={e => setPage(e.target.value)} />
        <input placeholder="Filter by section" value={section} onChange={e => setSection(e.target.value)} />
        <button onClick={() => setRefresh(r => r + 1)}>Filter</button>
      </div>
      <ImageGallery key={refresh} page={page} section={section} />
    </div>
  );
};

export default ContentManager;
