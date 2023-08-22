import css from './DecoratedButton.module.css';

export const DecoratedButton = ({ caption, onClick }) => {
  return (
    <button className={css.decoratedButton} onClick={onClick}>
      {caption}
    </button>
  );
};
