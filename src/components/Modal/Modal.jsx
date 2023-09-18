import PropTypes from 'prop-types';

import DecoratedButton from 'components/DecoratedButton';
import Text from 'components/Text';

import css from './Modal.module.css';

export default function Modal({ url, onClose }) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <Text>Modal</Text>
        <Text>url: {url}</Text>
        <DecoratedButton caption="Close" onClick={onClose} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
