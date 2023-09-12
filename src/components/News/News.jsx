import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import SearchBar from 'components/SearchBar';
import CustomLoader from 'components/CustomLoader';
import DecoratedButton from 'components/DecoratedButton';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);

    setInterval(
      fetchArticles({ searchQuery: newQuery, currentPage })
        .then(responseArticles => {
          setArticles(prevArticles => [...prevArticles, ...responseArticles]);
          setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false)),
      5000
    );
  }, [currentPage, newQuery]);

  const onChangeNewQuery = query => {
    setNewQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
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

      {error && <p>Oops.. error of request!</p>}

      {shouldRenderLoadMoreButton && (
        <DecoratedButton caption="Load more" onClick={() => null} />
      )}

      {isLoading && <CustomLoader />}
    </>
  );
}
