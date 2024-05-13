import PropTypes from 'prop-types';
import { useRef } from 'react';
import { toast } from 'react-toastify';

import FlexBox from 'components/FlexBox';
import Button from 'components/Button';

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

const Task03 = () => {
  return (
    <FlexBox>
      <DebouncedButton
        onClick={() => {
          return toast.info('Spaceship launched!');
        }}
        caption="Launch the spiceship"
      />
      <DebouncedButton
        onClick={() => {
          return toast.info('Soup boiled!');
        }}
        caption="Boil the soup"
      />
      <DebouncedButton
        onClick={() => {
          return toast.info('Lullaby sung!');
        }}
        caption="Sing a lullaby"
      />
    </FlexBox>
  );
};

export default Task03;
