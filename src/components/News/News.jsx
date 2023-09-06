import { useState, useEffect } from 'react';
import axios from 'axios';

import SearchBar from 'components/SearchBar';

axios.defaults.headers.common['Authorization'] =
  'Bearer 12bb4d5829d14b34ac0d67e4ed8ca6bf';

const fetchArticles = ({
  searchQuery = '',
  currentPage = 1,
  pageSize = 5,
} = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2//everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then(response => response.data.articles);
};

export default function News() {
  const [newQuery, setNewQuery] = useState('');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles({ searchQuery: 'css' }).then(responseArticles =>
      setArticles(responseArticles)
    );
  }, []);

  return (
    <>
      <SearchBar onFormSubmit={setNewQuery} query="for news" />
      <div>{newQuery}</div>
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
