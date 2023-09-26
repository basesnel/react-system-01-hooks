import { useState } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import DecoratedButton from 'components/DecoratedButton';

import css from './FixIncStateUpdates.module.css';

export default function FixIncStateUpdates() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  const handlePlusClick = () => {
    player.score++;
  };

  const handleFirstNameChange = e => {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  };

  const handleLastNameChange = e => {
    setPlayer({
      lastName: e.target.value,
    });
  };

  return (
    <DecoratedForm onSubmit={e => e.preventDefault()}>
      <label>
        Score: <b>{player.score}</b>{' '}
        <DecoratedButton onClick={handlePlusClick} caption="+1" />
      </label>
      <DecoratedInput
        inputType="text"
        inputName="firstName"
        inputValue={player.firstName}
        inputLabel="First name"
        handleChange={handleFirstNameChange}
        icon={<FiEdit3 className={css.icon} />}
      />
      <DecoratedInput
        inputType="text"
        inputName="lastName"
        inputValue={player.lastName}
        inputLabel="Last name"
        handleChange={handleLastNameChange}
        icon={<FiEdit3 className={css.icon} />}
      />
    </DecoratedForm>
  );
}
