import PropTypes from 'prop-types';

import { useState } from 'react';
import { createPortal } from 'react-dom';

import Grid from 'components/Grid';
import Card from 'components/Card';
import Modal from 'components/Modal';

import css from './BigCards.module.css';

import { images } from 'constants';

const List = props => {
  const { items } = props;

  return (
    <Grid>
      {items.map(item => (
        <Item key={item.large} item={item} />
      ))}
    </Grid>
  );
};

const Item = props => {
  const { item } = props;
  const { card } = css;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card title={item.preview}>
      <div className={card} onClick={() => setIsModalOpen(true)}>
        <span>{item.preview}</span>
      </div>
      {isModalOpen &&
        createPortal(
          <Modal
            url={item.large}
            onHide={event => {
              if (event.target === event.currentTarget) setIsModalOpen(false);
            }}
            onClose={() => setIsModalOpen(false)}
          />,
          document.body
        )}
    </Card>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      preview: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

Item.propTypes = {
  item: PropTypes.shape({
    preview: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
  }).isRequired,
};

export default function BigCards() {
  return (
    <section>
      <List items={images} />
    </section>
  );
}
