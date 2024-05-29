import { ImSpinner } from 'react-icons/im';

import { Paragraph } from 'components';

import css from './CustomLoader.module.css';

const CustomLoader = () => {
  const { spinner, iconSpin } = css;

  return (
    <div className={spinner}>
      <ImSpinner className={iconSpin} /> <Paragraph>Loading...</Paragraph>
    </div>
  );
};

export default CustomLoader;
