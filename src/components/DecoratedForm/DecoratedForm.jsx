import css from './DecoratedForm.module.css';

export default function DecoratedForm({ children, onSubmit }) {
  return (
    <form className={css.form} onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  );
}
