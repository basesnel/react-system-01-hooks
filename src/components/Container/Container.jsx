import css from './Container.module.css';

export default function Container({ variant = null, children }) {
  const variation = variant ? `${css[variant]}` : '';
  return <div className={`${css.container} ${variation}`}>{children}</div>;
}
