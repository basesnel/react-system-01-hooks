import css from './DecoratedImg.module.css';

export default function DecoratedImg({ src, name, width = null }) {
  return (
    <div className={css.thumb}>
      <img src={src} alt={name} width={width} />
    </div>
  );
}
