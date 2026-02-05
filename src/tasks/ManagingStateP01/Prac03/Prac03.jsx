import { HideOverflow, Title } from 'components';
import { StateFormP03 } from '../intendendComponents';

const Prac03 = () => {
  const statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

  return (
    <HideOverflow>
      {statuses.map(status => (
        <section key={status}>
          <Title level={3} caption={`Form (${status}):`} />
          <StateFormP03 status={status} />
        </section>
      ))}
    </HideOverflow>
  );
};

export default Prac03;
