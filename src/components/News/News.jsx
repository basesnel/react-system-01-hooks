import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import SearchBar from 'components/SearchBar';
import CustomLoader from 'components/CustomLoader';

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

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);

    fetchArticles({ searchQuery: newQuery, currentPage })
      .then(responseArticles => {
        setArticles(prevArticles => [...prevArticles, ...responseArticles]);
        setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
      })
      .finally(() => setIsLoading(false));
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

      {isLoading && <CustomLoader />}
    </>
  );
}
