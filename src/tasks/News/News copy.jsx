import { useState, useEffect, useRef } from 'react';

import axios from 'axios';

import {
  SearchBar,
  List,
  Item,
  FlexBox,
  Button,
  CustomLoader,
} from 'components';

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

const News = () => {
  const { link } = css;

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
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
      fetchArticles({ searchQuery: query, currentPage })
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
  }, [currentPage, query]);

  const onHandleSubmit = query => {
    setQuery(query);
    setCurrentPage(1);
    setArticles([]);
    setError(null);
  };

  return (
    <>
      <SearchBar onFormSubmit={onHandleSubmit} />
      <List>
        {articles.map(({ title, url }) => (
          <Item key={title}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              {title}
            </a>
          </Item>
        ))}
      </List>

      {error && (
        <FlexBox>
          <p>Oops.. error of request!</p>
        </FlexBox>
      )}

      {shouldRenderLoadMoreButton && (
        <FlexBox>
          <Button
            caption="Load more"
            onClick={() =>
              setCurrentPage(prevCurrentPage => prevCurrentPage + 1)
            }
          />
        </FlexBox>
      )}

      {isLoading && (
        <FlexBox>
          <CustomLoader />
        </FlexBox>
      )}
    </>
  );
};

export default News;
