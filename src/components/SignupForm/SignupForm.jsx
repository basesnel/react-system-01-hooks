import { useLocalStorage } from 'hooks/useLocalStorage';

import css from './SignupForm.module.css';

export const SignupForm = () => {
  // case lazy init state:
  // ===================================================================
  // const localStorageState = () => {
  //   console.log('get state on re-render');
  //   return JSON.parse(window.localStorage.getItem('email')) ?? '';
  // };

  // const initState = () => localStorageState();
  // initState trigger on init render in this form: initState = () => func();
  // initState trigger on every render in this form: initState = func();

  // const [email, setEmail] = useState(initState);
  // ====================================================================

  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <form className={css.form} autoComplete="off">
      <label className={css.field}>
        <span className={css.label}>E-mail</span>
        <input
          type="email"
          name="email"
          className={css.input}
          onChange={handleChange}
          value={email}
        />
      </label>
      <label className={css.field}>
        <span className={css.label}>Password</span>
        <input
          type="password"
          name="password"
          className={css.input}
          onChange={handleChange}
          value={password}
        />
      </label>
      <div className={css.aligner}>
        <button type="submit" className={css.button}>
          Register
        </button>
      </div>
    </form>
  );
};
