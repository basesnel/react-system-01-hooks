import { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Grid, Card2, H, Modal } from 'components';
import { images } from 'constants';

import styles from './styles.module.css';

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card2 title={<H level={2}>{item.preview}</H>}>
      <div className={styles.card} onClick={() => setIsModalOpen(true)}>
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
    </Card2>
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

const BigCards = () => {
  return (
    <section>
      <List items={images} />
    </section>
  );
};

export default BigCards;
