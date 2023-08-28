import { toast } from 'react-toastify';
import { useLocalStorage } from 'hooks/useLocalStorage';

import { DecoratedInput } from 'components/DecoratedInput/DecoratedInput';
import { DecoratedForm } from 'components/DecoratedForm/DecoratedForm';
import { DecoratedSubmit } from 'components/DecoratedSubmit/DecoratedSubmit';

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

  const handleSubmitForm = event => {
    event.preventDefault();
    toast.success(`Welcome, ${email}!`);
    console.log({ email, password });
  };

  return (
    <DecoratedForm onSubmit={handleSubmitForm}>
      <DecoratedInput
        inputName="email"
        inputValue={email}
        inputLabel="E-mail"
        handleChange={handleChange}
      />
      <DecoratedInput
        inputName="password"
        inputValue={password}
        inputLabel="Password"
        handleChange={handleChange}
      />
      <DecoratedSubmit caption="Register" />
    </DecoratedForm>
  );
};
