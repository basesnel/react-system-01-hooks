import { useState, useEffect, useRef } from 'react';
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
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then(response => response.data.articles);
};

export default function News() {
  const [articles, setArticles] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchArticles({ searchQuery: newQuery, currentPage }).then(
      responseArticles => {
        setArticles(prevArticles => [...prevArticles, ...responseArticles]);
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
      }
    );
  }, [currentPage, newQuery]);

  const onChangeNewQuery = query => {
    setNewQuery(query);
    setCurrentPage(1);
    setArticles([]);
  };

  return (
    <>
      <SearchBar onFormSubmit={onChangeNewQuery} />
      {/* <div>{newQuery}</div> */}
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
