import { useState, useEffect } from 'react';
import { fetchData } from './api';

export function useSelectOptions(url) {
  const [list, setList] = useState(null);
  const [selectedId, setSelectId] = useState('');

  useEffect(() => {
    if (url === null) {
      return;
    }

    let ignore = false;
    fetchData(url).then(result => {
      if (!ignore) {
        setList(result);
        setSelectId(result[0].id);
      }
    });
    return () => {
      ignore = true;
    };
  }, [url]);
  return [list, selectedId, setSelectId];
}
