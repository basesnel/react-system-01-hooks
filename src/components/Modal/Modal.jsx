import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import Paragraph from 'components/Paragraph';

import css from './Modal.module.css';

export default function Modal({ url, onHide, onClose }) {
  return (
    <div className={css.backdrop} onClick={onHide}>
      <div className={css.modal}>
        <Paragraph>Modal</Paragraph>
        <Paragraph>url: {url}</Paragraph>
        <button className={css['modal-close']} onClick={onClose}>
          <MdClose className={css.icon} />
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
