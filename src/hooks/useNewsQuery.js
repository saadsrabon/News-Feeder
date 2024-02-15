import { useState, useEffect } from 'react';

const useNewsQuery = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `http://localhost:8000/v2/top-headlines?`;
        if (category) {
          url += `category=${category}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchSearchResults = async () => {
      try {
        const searchUrl = `http://localhost:8000/v2/search?q=${searchQuery}`;
        const response = await fetch(searchUrl);
        const data = await response.json();
        console.log(data);
        setNews(data?.result);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    } else {
      fetchNews();
    }

    // Cleanup function
    return () => {
      // Performs any necessary cleanup here
      
    };
  }, [category, searchQuery]);

  const setCategoryAndFetch = (newCategory) => {
    setCategory(newCategory);
  };

  // const setSearchQueryAndFetch = (query) => {
  //   setSearchQuery(query);
  // };

  return { news, setCategoryAndFetch, setSearchQuery,searchQuery,category};
};

export default useNewsQuery;
