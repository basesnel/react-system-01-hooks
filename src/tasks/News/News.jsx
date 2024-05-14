import { useState, useEffect, useRef } from 'react';

import SearchBar from 'components/SearchBar';
import List from 'components/List';
import Item from 'components/Item';
import FlexBox from 'components/FlexBox';
import Button from 'components/Button';
import CustomLoader from 'components/CustomLoader';

import { fetchArticles } from 'services/news-api';

import css from './News.module.css';

const News = () => {
  const { link } = css;

  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
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

    setTimeout(() => {
      fetchArticles({ searchQuery: query, currentPage })
        .then(responseArticles => {
          setArticles(prevArticles => [...prevArticles, ...responseArticles]);
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false));
    }, 3000);
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
      <List message="Please, enter keyword for search news!">
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
            onClick={() => setCurrentPage(prevPage => prevPage + 1)}
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
