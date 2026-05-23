
import { useState, useEffect, useMemo } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface UsePostsReturn {
  posts: Post[];
  filteredPosts: Post[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const usePosts = (postsPerPage: number = 6): UsePostsReturn => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        
        const data: Post[] = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  
  const filteredPosts = useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [posts, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return { 
    posts, 
    filteredPosts, 
    loading, 
    error, 
    currentPage, 
    totalPages, 
    setCurrentPage, 
    searchTerm, 
    setSearchTerm 
  };
};