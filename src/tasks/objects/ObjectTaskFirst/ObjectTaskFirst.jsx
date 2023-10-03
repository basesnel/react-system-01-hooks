import { useState } from 'react';

import { FiEdit3 } from 'react-icons/fi';

import DecoratedForm from 'components/DecoratedForm';
import DecoratedInput from 'components/DecoratedInput';
import DecoratedButton from 'components/DecoratedButton';

import { initialTaskFirstPerson } from 'constants';

import css from './ObjectTaskFirst.module.css';

export default function ObjectTaskFirst() {
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
      <label className={css['label-wrap']}>
        Score: <b>{player.score}</b>{' '}
        <DecoratedButton onClick={handlePlusClick} caption="+1" />
      </label>
    </DecoratedForm>
  );
}
