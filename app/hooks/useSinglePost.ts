

import { useState, useEffect } from "react";
interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
  imageUrl: string;
}
const useSinglePost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data.posts)) {
          const postsWithImages = data.posts.map((post: Post) => ({
            ...post,
            imageUrl: 'https://tinyurl.com/2kjp7rsn' 
          }));
          setPosts(postsWithImages);
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (error) {
        setError((error as Error).message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, reactions: { ...post.reactions, likes: post.reactions.likes + 1 } }
        : post
    ));
  };
  const handleDislike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, reactions: { ...post.reactions, dislikes: post.reactions.dislikes + 1 } }
        : post
    ));
  };
  const handleViews = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, views: post.views + 1 }
        : post
    ));
  };
  return {
    posts,
    loading,
    error,
    handleLike,
    handleDislike,
    handleViews
  };
};
export default useSinglePost;
