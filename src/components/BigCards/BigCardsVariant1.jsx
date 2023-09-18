import DecoratedButton from 'components/DecoratedButton';
import { useState } from 'react';

const Modal = ({ url, onClose }) => {
  return (
    <div>
      <p>Modal</p>
      <p>url: {url}</p>
      <DecoratedButton caption="Close" onClick={onClose} />
    </div>
  );
};

const List = ({ items, onSelect }) => {
  return (
    <div>
      {items.map(item => (
        <ListItem key={item.large} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
};

const ListItem = ({ item, onSelect }) => {
  return <div onClick={() => onSelect(item.large)}>{item.large}</div>;
};

export default function BigCards() {
  // const [images, setImages] = useState([
  //   { preview: 'preview-1', large: 'large-1' },
  //   { preview: 'preview-2', large: 'large-2' },
  //   { preview: 'preview-3', large: 'large-3' },
  // ]);

  const images = [
    { preview: 'preview-1', large: 'large-1' },
    { preview: 'preview-2', large: 'large-2' },
    { preview: 'preview-3', large: 'large-3' },
  ];

  const [selectImageUrl, setSelectImageUrl] = useState(null);

  return (
    <section>
      <List items={images} onSelect={setSelectImageUrl} />
      {selectImageUrl && (
        <Modal url={selectImageUrl} onClose={() => setSelectImageUrl(null)} />
      )}
    </section>
  );
}
