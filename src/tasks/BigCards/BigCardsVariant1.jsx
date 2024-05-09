import PropTypes from 'prop-types';

import { useState } from 'react';

import Button from 'components/Button';

import { images } from 'constants';

const Modal = props => {
  const { url, onClose } = props;

  return (
    <div>
      <p>Modal</p>
      <p>url: {url}</p>
      <Button caption="Close" onClick={onClose} />
    </div>
  );
};

const List = props => {
  const { items, onSelect } = props;

  return (
    <div>
      {items.map(item => (
        <Item key={item.large} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
};

const Item = props => {
  const { item, onSelect } = props;

  return <div onClick={() => onSelect(item.large)}>{item.large}</div>;
};

export default function BigCards() {
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

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      preview: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

Item.propTypes = {
  item: PropTypes.shape({
    preview: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
