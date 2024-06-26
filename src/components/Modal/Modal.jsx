import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import { Paragraph } from 'components';

import css from './Modal.module.css';

const Modal = props => {
  const { url, onHide, onClose } = props;
  const { backdrop, modal, modalClose, icon } = css;

  return (
    <div className={backdrop} onClick={onHide}>
      <div className={modal}>
        <Paragraph>Modal</Paragraph>
        <Paragraph>url: {url}</Paragraph>
        <button className={modalClose} onClick={onClose}>
          <MdClose className={icon} />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
