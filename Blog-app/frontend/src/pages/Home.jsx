import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Latest Posts</h2>
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map(post => (
          <div key={post._id} style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '8px'
          }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>By: {post.author.name} ({post.author.email})</small><br />
            <small>Posted on: {new Date(post.createdAt).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
