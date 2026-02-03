import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Form, TextInput, Button } from 'components';
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
      <TextInput
        name="firstNameT01"
        value={player.firstName}
        label="First name"
        placeholder="Type a person's first name..."
        onChange={handleFirstNameChange}
        icon={<FiEdit3 />}
      />
      <TextInput
        name="lastNameT01"
        value={player.lastName}
        label="Last name"
        placeholder="Type a person's last name..."
        onChange={handleLastNameChange}
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
