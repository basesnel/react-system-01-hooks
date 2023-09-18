import { useState } from 'react';

import Modal from 'components/Modal';

const List = ({ items }) => {
  return (
    <div>
      {items.map(item => (
        <ListItem key={item.large} item={item} />
      ))}
    </div>
  );
};

const ListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsModalOpen(true)}>{item.preview}</div>
      {isModalOpen && (
        <Modal url={item.large} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
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

  return (
    <section>
      <List items={images} />
    </section>
  );
}
