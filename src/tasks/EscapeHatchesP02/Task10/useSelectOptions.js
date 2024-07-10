import { useState, useEffect } from 'react';
import { fetchData } from './api';

const useSelectOptions = url => {
  const [list, setList] = useState(null);
  const [selected, setSelect] = useState('');

  useEffect(() => {
    if (url === null) {
      return;
    }

    let ignore = false;
    fetchData(url).then(result => {
      if (!ignore) {
        setList(result);
        setSelect(result[0]);
      }
    });
    return () => {
      ignore = true;
    };
  }, [url]);
  return [list, selected, setSelect];
};

export { useSelectOptions };
