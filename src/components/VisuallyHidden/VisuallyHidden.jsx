import css from './VisuallyHidden.module.css';

export default function VisuallyHidden({ children, ...delegated }) {
  return (
    <span className={css['visually-hidden']} {...delegated}>
      {children}
    </span>
  );
}
