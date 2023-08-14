import css from './Title.module.css';

export const Title = ({ caption }) => {
  return <h1 className={css.title}>{caption}</h1>;
};
