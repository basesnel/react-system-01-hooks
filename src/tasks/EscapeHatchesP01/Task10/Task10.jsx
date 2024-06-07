import { useState } from 'react';
import { FlexBox, Button, Paragraph } from 'components';
import { MyFocusedInput } from '../intendedComponents';

const Task10 = () => {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  return (
    <>
      <FlexBox>
        <Button
          caption={`${showForm ? 'Hide' : 'Show'} form`}
          onClick={() => setShowForm(!showForm)}
        />
        {showForm && (
          <>
            <MyFocusedInput
              shouldFocus={false}
              label="Enter first name"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <MyFocusedInput
              shouldFocus={true}
              label="Enter last name"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <Paragraph>
              Hello, <b>{`${firstName} ${lastName}`}</b>
            </Paragraph>
          </>
        )}
      </FlexBox>
    </>
  );
};

export default Task10;
