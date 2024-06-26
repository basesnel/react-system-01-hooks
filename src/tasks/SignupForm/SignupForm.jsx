import { toast } from 'react-toastify';
import { FiLock, FiMail } from 'react-icons/fi';
import { Form, Input, FlexBox, Button } from 'components';
import { useLocalStorage } from 'hooks';

const SignupForm = () => {
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
    setEmail('');
    setPassword('');

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
    <Form onSubmit={handleSubmitForm}>
      <Input
        inputType="email"
        inputName="email"
        inputValue={email}
        inputLabel="E-mail"
        inputPlaceholder="Input e-mail"
        handleChange={handleChange}
        icon={<FiMail />}
      />
      <Input
        inputType="password"
        inputName="password"
        inputValue={password}
        inputLabel="Password"
        inputPlaceholder="Input password"
        handleChange={handleChange}
        icon={<FiLock />}
      />
      <FlexBox>
        <Button type="submit" caption="Register" />
      </FlexBox>
    </Form>
  );
};

export default SignupForm;
