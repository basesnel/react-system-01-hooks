import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const ModalDialog = props => {
  const { isOpen, children } = props;

  const ref = useRef();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
};

ModalDialog.propTypes = {
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ModalDialog;
