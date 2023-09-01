import DecoratedButton from 'components/DecoratedButton';

import css from './DecoratedSubmit.module.css';

export default function DecoratedSubmit({ caption }) {
  return (
    <div className={css.aligner}>
      <DecoratedButton type="submit" caption={caption} />
    </div>
  );
}