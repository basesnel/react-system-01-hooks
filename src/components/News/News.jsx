import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import SearchBar from 'components/SearchBar';
import CustomLoader from 'components/CustomLoader';
import DecoratedButton from 'components/DecoratedButton';

import css from './News.module.css';

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
  // const intervalNewsId = useRef(null);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      fetchArticles({ searchQuery: newQuery, currentPage })
        .then(responseArticles => {
          setArticles(prevArticles => [...prevArticles, ...responseArticles]);
          // setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    }, 3000);

    // console.log('This interval every 5000ms ' + Date.now());

    // setIsLoading(true);

    // intervalNewsId.current = setInterval(() => {
    //   fetchArticles({ searchQuery: newQuery, currentPage })
    //     .then(responseArticles => {
    //       setArticles(prevArticles => [...prevArticles, ...responseArticles]);
    //       // setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    //     })
    //     .catch(error => setError(error.message))
    //     .finally(() => setIsLoading(false));
    // }, 5000);

    // return () => {
    //   console.log('This is function for clear to next effect trigger');
    //   clearInterval(intervalNewsId.current);
    //   setIsLoading(false);
    // };
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
      <ul className={css.list}>
        {articles.map(({ title, url }) => (
          <li key={title} className={css.item}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>

      {error && (
        <div className={css.wrapper}>
          <p>Oops.. error of request!</p>
        </div>
      )}

      {shouldRenderLoadMoreButton && (
        <div className={css.wrapper}>
          <DecoratedButton
            caption="Load more"
            onClick={() =>
              setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
            }
          />
        </div>
      )}

      {isLoading && (
        <div className={css.wrapper}>
          <CustomLoader />
        </div>
      )}
    </>
  );
}
