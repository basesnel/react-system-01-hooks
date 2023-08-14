import clsx from 'clsx';
import css from './Container.module.css';

export const Container = ({ variant, children }) => {
  return <div className={clsx(css.container, css[variant])}>{children}</div>;
};
