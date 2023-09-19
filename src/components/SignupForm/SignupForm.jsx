import { toast } from 'react-toastify';
import { FiLock } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { useLocalStorage } from 'hooks/useLocalStorage';

import DecoratedInput from 'components/DecoratedInput';
import DecoratedForm from 'components/DecoratedForm';
import DecoratedSubmit from 'components/DecoratedSubmit';

import css from './SignupForm.module.css';

export default function SignupForm() {
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

  const handleSubmitForm = event => {
    event.preventDefault();

    if (!email.trim().length && !password.trim().length) {
      return toast.error(
        `E-mail & Password fields is empty - please, enter E-mail and Password!`
      );
    }

    if (!email.trim().length) {
      return toast.error(`E-mail field is empty - please, enter it!`);
    }

    if (!password.trim().length) {
      return toast.error(`Password field is empty - please, enter it!`);
    }

    console.log({ email, password });
    return toast.success(`Welcome, ${email}!`);
  };

  return (
    <DecoratedForm onSubmit={handleSubmitForm}>
      <DecoratedInput
        inputName="email"
        inputValue={email}
        inputLabel="E-mail"
        handleChange={handleChange}
        icon={<FiLock className={css.icon} />}
      />
      <DecoratedInput
        inputName="password"
        inputValue={password}
        inputLabel="Password"
        handleChange={handleChange}
        icon={<FiMail className={css.icon} />}
      />
      <DecoratedSubmit caption="Register" />
    </DecoratedForm>
  );
}