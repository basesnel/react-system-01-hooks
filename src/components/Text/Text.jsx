import css from './Text.module.css';

export const Text = ({ children }) => {
  return <p className={css.txt}>{children}</p>;
};
