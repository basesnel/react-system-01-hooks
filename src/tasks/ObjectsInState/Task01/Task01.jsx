import { useState } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import Input from 'components/Input';
import Button from 'components/Button';

import { initialTaskFirstPerson } from 'constants';

import css from './Task01.module.css';

export default function Task01() {
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
    <DecoratedForm onSubmit={e => e.preventDefault()}>
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
      <label className={css['label-wrap']}>
        Score: <b>{player.score}</b>{' '}
        <Button onClick={handlePlusClick} caption="+1" />
      </label>
    </DecoratedForm>
  );
}
