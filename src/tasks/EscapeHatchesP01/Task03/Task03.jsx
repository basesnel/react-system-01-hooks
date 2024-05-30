import { toast } from 'react-toastify';

import { FlexBox } from 'components';

import { DebouncedButton } from '../intendedComponents';

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
