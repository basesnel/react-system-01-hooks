import { DecoratedButton } from 'components/DecoratedButton/DecoratedButton';

import css from './DecoratedSubmit.module.css';

export const DecoratedSubmit = ({ caption }) => {
  return (
    <div className={css.aligner}>
      <DecoratedButton type="submit" caption={caption} />
    </div>
  );
};
