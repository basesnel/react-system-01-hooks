import css from './VisuallyHidden.module.css';

export const VisuallyHidden = ({ children, ...delegated }) => {
  return (
    <span className={css['visually-hidden']} {...delegated}>
      {children}
    </span>
  );
};
