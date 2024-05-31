import { useState } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import { Form, Input, Button } from 'components';

import { initialTaskFirstPerson } from 'constants';

import css from './Task01.module.css';

const Task01 = () => {
  const { labelWrap } = css;

  const [player, setPlayer] = useState(initialTaskFirstPerson);

  const handlePlusClick = () => {
    setPlayer({ ...player, score: player.score + 1 });
  };

  const handleFirstNameChange = e => {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = e => {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  };

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Input
        inputType="text"
        inputName="firstName"
        inputValue={player.firstName}
        inputLabel="First name"
        handleChange={handleFirstNameChange}
        icon={<FiEdit3 />}
      />
      <Input
        inputType="text"
        inputName="lastName"
        inputValue={player.lastName}
        inputLabel="Last name"
        handleChange={handleLastNameChange}
        icon={<FiEdit3 />}
      />
      <label className={labelWrap}>
        Score: <b>{player.score}</b>{' '}
        <Button onClick={handlePlusClick} caption="+1" />
      </label>
    </Form>
  );
};

export default Task01;
