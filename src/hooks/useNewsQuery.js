import { useState, useEffect } from 'react';

const useNewsQuery = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `http://localhost:8000/v2/top-headlines?`;
        if (category) {
          url += `category=${category}&`;
        }
        if (searchQuery) {
          url += `q=${searchQuery}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    // Cleanup function
    return () => {
      // Perform any necessary cleanup here
    };
  }, [category, searchQuery]);

  const setCategoryAndFetch = (newCategory) => {
    setCategory(newCategory);
  };

  const setSearchQueryAndFetch = (query) => {
    setSearchQuery(query);
  };

  return { news, setCategoryAndFetch, setSearchQueryAndFetch };
};

export default useNewsQuery;