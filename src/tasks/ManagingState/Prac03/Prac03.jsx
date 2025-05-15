// import { useState } from 'react';
// import { MiniForm, List, Item, ItemFlex, ItemText } from 'components';
// import { RiAddCircleFill } from 'react-icons/ri';

import Form from './Form';

const Prac03 = () => {
  const statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

  return (
    <>
      {statuses.map(status => (
        <section key={status}>
          <h4>Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))}
    </>
  );
};

export default Prac03;
