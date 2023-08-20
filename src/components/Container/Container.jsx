import css from './Container.module.css';

export const Container = ({ variant = null, children }) => {
  const variation = variant ? `${css[variant]}` : '';
  return <div className={`${css.container} ${variation}`}>{children}</div>;
};
