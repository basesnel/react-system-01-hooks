// import { useState } from 'react';
// import { MiniForm, List, Item, ItemFlex, ItemText } from 'components';
// import { RiAddCircleFill } from 'react-icons/ri';

const Prac02 = ({ status = 'error' }) => {
  if (status === 'success') return <h1>That's right!</h1>;

  return (
    <>
      <h2>city quiz</h2>
      <p>
        In which city is there a billboard that runs air into drinkable water
      </p>
      <form>
        <textarea disabled={status === 'submitting'} />
        <br />
        <button disabled={status === 'empty' || status === 'submitting'}>
          Submit
        </button>
        {status === 'error' && <p>Good guess but a wrong answer. Try again!</p>}
      </form>
    </>
  );
};

export default Prac02;
