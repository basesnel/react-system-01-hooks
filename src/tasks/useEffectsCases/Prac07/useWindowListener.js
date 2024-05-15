import { useEffect } from 'react';

export const useWindowListener = (eventType, listener) => {
  useEffect(() => {
    const canvas = document.querySelector('[data-xob]');
    canvas.addEventListener(eventType, listener);

    return () => {
      canvas.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
};
