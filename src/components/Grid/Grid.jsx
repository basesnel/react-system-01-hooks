import css from './Grid.module.css';

export default function Grid({ children }) {
  return <section className={css.grid}>{children}</section>;
}
