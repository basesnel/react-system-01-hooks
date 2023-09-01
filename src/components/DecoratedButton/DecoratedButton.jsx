import css from './DecoratedButton.module.css';

export default function DecoratedButton({ caption, onClick, isDisabled }) {
  return (
    <button
      className={css.decoratedButton}
      onClick={onClick}
      disabled={isDisabled}
    >
      {caption}
    </button>
  );
}
