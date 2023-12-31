import { ImSpinner } from 'react-icons/im';

import Paragraph from 'components/Paragraph';

import css from './CustomLoader.module.css';

export default function CustomLoader() {
  return (
    <div className={css.spinner}>
      <ImSpinner className={css['icon-spin']} />{' '}
      <Paragraph>Loading...</Paragraph>
    </div>
  );
}
