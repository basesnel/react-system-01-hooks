import { useState } from 'react';

import { FlexBox, Button, CheckBox, Paragraph } from 'components';

import { MyInput } from '../intendedComponents';

const Task09 = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('Taylor');
  const [upper, setUpper] = useState(false);

  return (
    <>
      <FlexBox>
        <Button
          caption={`${showForm ? 'Hide' : 'Show'} form`}
          onClick={() => setShowForm(!showForm)}
        />
        {showForm && (
          <>
            <MyInput value={name} onChange={e => setName(e.target.value)} />
            <CheckBox
              name="isUppercase"
              checked={upper}
              onChange={() => setUpper(!upper)}
              label="Make it uppercase"
            />
            <Paragraph>
              Hello, <b>{upper ? name.toUpperCase() : name}</b>
            </Paragraph>
          </>
        )}
      </FlexBox>
    </>
  );
};

export default Task09;
