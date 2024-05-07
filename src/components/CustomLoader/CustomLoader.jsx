import { ImSpinner } from 'react-icons/im';

import Paragraph from 'components/Paragraph';

import css from './CustomLoader.module.css';

export default function CustomLoader() {
  const { spinner, iconSpin } = css;

  return (
    <div className={spinner}>
      <ImSpinner className={iconSpin} /> <Paragraph>Loading...</Paragraph>
    </div>
  );
}
