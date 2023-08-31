import css from './Text.module.css';

export const Text = ({ children, centered }) => {
  return (
    <p className={centered ? `${css.txt} ${css.centered}` : css.txt}>
      {children}
    </p>
  );
};
