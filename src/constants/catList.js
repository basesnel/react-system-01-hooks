export function catList(length) {
  const list = [];

  for (let i = 0; i < length; i++) {
    list.push({
      id: i,
      imageUrl: 'https://plchldr.co/i/336x280',
    });
  }

  return list;
}
