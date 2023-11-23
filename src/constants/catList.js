export function catList(length) {
  const list = [];

  for (let i = 0; i < length; i++) {
    list.push({
      id: i,
      imageUrl: 'https://placekitten.com/250/200?image=' + i,
    });
  }

  return list;
}
