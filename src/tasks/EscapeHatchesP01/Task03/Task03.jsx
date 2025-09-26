import { toast } from 'react-toastify';
import { FlexBox } from 'components';
import { DebouncedButtonT03 } from '../intendedComponents';

const Task03 = () => {
  return (
    <FlexBox wrapped="wrap">
      <DebouncedButtonT03
        onClick={() => {
          return toast.info('Spaceship launched!');
        }}
        caption="Launch the spiceship"
      />
      <DebouncedButtonT03
        onClick={() => {
          return toast.info('Soup boiled!');
        }}
        caption="Boil the soup"
      />
      <DebouncedButtonT03
        onClick={() => {
          return toast.info('Lullaby sung!');
        }}
        caption="Sing a lullaby"
      />
    </FlexBox>
  );
};

export default Task03;
