import css from './Grid.module.css';

export const Grid = ({ children }) => {
  return <section className={css.grid}>{children}</section>;
};
