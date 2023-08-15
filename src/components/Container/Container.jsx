import css from './Container.module.css';

export const Container = ({ variant, children }) => {
  return <div className={`${css.container} ${css[variant]}`}>{children}</div>;
};
