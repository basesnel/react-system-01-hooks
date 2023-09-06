import { useState } from 'react';

import SearchBar from 'components/SearchBar';

export default function News() {
  const [newQuery, setNewQuery] = useState('');

  return (
    <>
      <SearchBar onFormSubmit={setNewQuery} query="for news" />
      <div>{newQuery}</div>
    </>
  );
}
