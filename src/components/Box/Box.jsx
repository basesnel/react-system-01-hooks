import css from './Box.module.css';

export const Box = ({ children }) => {
  return <section className={css.box}>{children}</section>;
};
