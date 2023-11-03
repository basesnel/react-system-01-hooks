import { useState } from 'react';

import Modal from 'components/Modal';
import Grid from 'components/Grid';
import Card from 'components/Card';

import css from './BigCards.module.css';

import { images } from 'constants';

const List = ({ items }) => {
  return (
    <Grid>
      {items.map(item => (
        <ListItem key={item.large} item={item} />
      ))}
    </Grid>
  );
};

const ListItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Card title={item.preview}>
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
    </Card>
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
