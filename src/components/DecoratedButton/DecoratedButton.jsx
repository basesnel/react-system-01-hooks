import css from './DecoratedButton.module.css';

export default function DecoratedButton({ caption, onClick }) {
  return (
    <button className={css.decoratedButton} onClick={onClick}>
      {caption}
    </button>
  );
}
