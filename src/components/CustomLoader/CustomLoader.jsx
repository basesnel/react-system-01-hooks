import { ImSpinner } from 'react-icons/im';

import { P } from 'components';

import styles from './styles.module.css';

const CustomLoader = () => {
  return (
    <div className={styles.spinner}>
      <ImSpinner className={styles.icon} /> <P>Loading...</P>
    </div>
  );
};

export default CustomLoader;
