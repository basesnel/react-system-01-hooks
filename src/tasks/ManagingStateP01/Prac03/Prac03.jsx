import { HideOverflow, Title } from 'components';
import StateForm from './StateForm';

const Prac03 = () => {
  const statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

  return (
    <HideOverflow>
      {statuses.map(status => (
        <section key={status}>
          <Title level={3} caption={`Form (${status}):`} />
          <StateForm status={status} />
        </section>
      ))}
    </HideOverflow>
  );
};

export default Prac03;
