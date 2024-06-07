import { useRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';

const DebouncedButton = props => {
  const { onClick, caption } = props;

  const timeoutID = useRef(null);

  return (
    <Button
      onClick={() => {
        clearTimeout(timeoutID.current);
        timeoutID.current = setTimeout(() => {
          onClick();
        }, 1000);
      }}
      caption={caption}
    />
  );
};

DebouncedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
};

export default DebouncedButton;
