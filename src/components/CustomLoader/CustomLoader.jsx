import { ImSpinner } from 'react-icons/im';

import { Paragraph } from 'components';

import styles from './styles.module.css';

const CustomLoader = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner className={styles.iconSpin} />{' '}
      <Paragraph>Loading...</Paragraph>
    </div>
  );
};

export default CustomLoader;
