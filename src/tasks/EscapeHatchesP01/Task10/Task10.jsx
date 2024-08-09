import { useState } from 'react';
import { FlexBox, Button, Paragraph } from 'components';
import { MyFocusedInputT10 } from '../intendedComponents';

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
            <MyFocusedInputT10
              shouldFocus={false}
              label="Enter first name"
              name="firstNameT10"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <MyFocusedInputT10
              shouldFocus={true}
              label="Enter last name"
              name="lastNameT10"
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
