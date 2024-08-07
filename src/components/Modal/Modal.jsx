import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import { Paragraph } from 'components';

import styles from './styles.module.css';

const Modal = props => {
  const { url, onHide, onClose } = props;

  return (
    <div className={styles.backdrop} onClick={onHide}>
      <div className={styles.modal}>
        <Paragraph>Modal</Paragraph>
        <Paragraph>url: {url}</Paragraph>
        <button className={styles.close} onClick={onClose}>
          <MdClose className={styles.icon} />
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
