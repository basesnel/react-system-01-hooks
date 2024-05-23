const fetchBio = async person => {
  const delay = person === 'Bob' ? 2000 : 200;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve('This is ' + person + '\u2019s bio.');
    }, delay);
  });
};

export { fetchBio };
