import { ImSpinner } from 'react-icons/im';

import Text from 'components/Text';

import css from './CustomLoader.module.css';

export default function CustomLoader() {
  return (
    <div className={css.spinner}>
      <ImSpinner className={css['icon-spin']} /> <Text>Loading...</Text>
    </div>
  );
}
