import { useState } from 'react';

import Modal from 'components/Modal';
import FlexBox from 'components/FlexBox';

import css from './BigCards.module.css';

import { images } from 'constants';

const List = ({ items }) => {
  return (
    <FlexBox>
      {items.map(item => (
        <ListItem key={item.large} item={item} />
      ))}
    </FlexBox>
  );
};

const ListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className={css.card} onClick={() => setIsModalOpen(true)}>
        <span>{item.preview}</span>
      </div>
      {isModalOpen && (
        <Modal
          url={item.large}
          onHide={event => {
            if (event.target === event.currentTarget) setIsModalOpen(false);
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default function BigCards() {
  // const [initImages, setInitImages] = useState(images);

  return (
    <section>
      <List items={images} />
    </section>
  );
}
