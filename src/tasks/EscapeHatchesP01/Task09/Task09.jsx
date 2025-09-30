import { useState } from 'react';
import { FlexBox, Button, CheckBox, P } from 'components';
import { MyInputT09 } from '../intendedComponents';

const Task09 = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('Taylor');
  const [upper, setUpper] = useState(false);

  return (
    <>
      <FlexBox wrapped="wrap">
        <Button
          caption={`${showForm ? 'Hide' : 'Show'} form`}
          onClick={() => setShowForm(!showForm)}
        />
        {showForm && (
          <>
            <MyInputT09 value={name} onChange={e => setName(e.target.value)} />
            <CheckBox
              name="isUppercaseT09"
              checked={upper}
              onChange={() => setUpper(!upper)}
              label="Make it uppercase"
            />
            <P>
              Hello, <b>{upper ? name.toUpperCase() : name}</b>
            </P>
          </>
        )}
      </FlexBox>
    </>
  );
};

export default Task09;
