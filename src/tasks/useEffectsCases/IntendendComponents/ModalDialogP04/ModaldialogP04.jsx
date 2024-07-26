import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ModalDialogP04 = props => {
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

ModalDialogP04.propTypes = {
  children: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ModalDialogP04;
