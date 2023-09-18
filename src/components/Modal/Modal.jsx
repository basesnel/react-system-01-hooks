import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import Text from 'components/Text';

import css from './Modal.module.css';

export default function Modal({ url, onClose }) {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <Text>Modal</Text>
        <Text>url: {url}</Text>
        <button className={css['modal-close']} onClick={onClose}>
          <MdClose className={css.icon} />
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
