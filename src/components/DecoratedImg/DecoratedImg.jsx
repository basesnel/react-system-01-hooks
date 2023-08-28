import css from './DecoratedImg.module.css';

export const DecoratedImg = ({ src, name }) => {
  return (
    <div className={css.thumb}>
      <img src={src} alt={name} width="240" />
    </div>
  );
};
