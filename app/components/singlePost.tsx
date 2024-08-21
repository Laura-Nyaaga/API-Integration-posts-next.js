
import React from 'react';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    views: number;
  };
}

const singlePost: React.FC<PostCardProps> = ({ title, body, reactions }) => {
  return (
    <div className="post-card" style={{ border: '3px solid #ccc', padding: '20px', marginBottom: '10px' }}>
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="reactions">
        <span>❤️ {reactions.likes}</span>
        <span>👀 {reactions.views}</span>
      </div>
    </div>
  );
};

export default singlePost;
