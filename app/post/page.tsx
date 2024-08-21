

"use client";
import React from 'react';
import usePosts from '../hooks/useSinglePost';
import Image from 'next/image';
import userIcon from '/public/userIcon.png';

const Posts: React.FC = () => {
  const { posts, loading, error, handleLike, handleDislike, handleViews } = usePosts();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5">
        <p>Loading...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="w-full border-2 border-solid border-blue-500 p-5 rounded-md shadow-md text-center">
            <h1 className="text-xl font-bold mb-4">{post.title}</h1>
            <Image
            src={userIcon}
            alt="Fallback image"
            className="mb-4 w-full h-auto rounded-md object-cover w-[50px]"
            />
            
            <p className="text-left mb-4">{post.body}</p>
            <div className="flex justify-around mb-4">
              <button
                onClick={() => handleLike(post.id)}
                className="bg-orange-500 text-white py-2 px-4 rounded-md flex items-center"
              >
                👍 ({post.reactions?.likes || 0})
              </button>
              <button
                onClick={() => handleDislike(post.id)}
                className="bg-black text-white py-2 px-4 rounded-md flex items-center"
              >
                👎 ({post.reactions?.dislikes || 0})
              </button>
              <button
                onClick={() => handleViews(post.id)}
                className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center"
              >
                👁️ ({post.views || 0})
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
};

export default Posts;
