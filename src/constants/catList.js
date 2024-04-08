export function catList(length) {
  const list = [];

  for (let i = 0; i < length; i++) {
    const id = i < 9 ? `0${i + 1}` : `${i + 1}`;
    list.push({
      id: i,
      image320: `kitten-320-${id}`,
      image640: `kitten-640-${id}`,
      image960: `kitten-960-${id}`,
      image1280: `kitten-1280-${id}`,
    });
  }

  return list;
}
