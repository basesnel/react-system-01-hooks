import css from './Caption.module.css';

export default function Caption({ text }) {
  return (
    <div className={css.wrapper}>
      <span>{text}</span>
    </div>
  );
}
