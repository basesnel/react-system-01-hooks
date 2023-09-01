import css from './Box.module.css';

export default function Box({ children }) {
  return <section className={css.box}>{children}</section>;
}
