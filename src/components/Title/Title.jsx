import css from './Title.module.css';

export const Title = ({ level, caption }) => {
  switch (level) {
    case 1:
      return <h1 className={css.title01}>{caption}</h1>;

    case 2:
      return <h2 className={`${css.title01} ${css.title02}`}>{caption}</h2>;

    default:
      return null;
  }
};
