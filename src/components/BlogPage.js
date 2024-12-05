// src/components/BlogPage.js
import React, { useState } from 'react';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, image };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
    setImage('');
  };

  return (
    <div>
      <h1>Blog</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>

      <h2>All Posts</h2>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="mb-4">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            {post.image && <img src={URL.createObjectURL(post.image)} alt="Blog" width="200" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
