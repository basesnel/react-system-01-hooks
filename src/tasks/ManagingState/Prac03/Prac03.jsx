import { Title } from 'components';
import StateForm from './StateForm';

const Prac03 = () => {
  const statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <Title level={3} caption={`Form (${status}):`} />
          <StateForm status={status} />
        </section>
      ))}
    </>
  );
};

export default Prac03;
