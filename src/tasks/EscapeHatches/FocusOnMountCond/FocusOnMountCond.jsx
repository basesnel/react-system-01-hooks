import { useState } from 'react';

import FlexBox from 'components/FlexBox';
import DecoratedButton from 'components/DecoratedButton';
import Paragraph from 'components/Paragraph';
import MyInput from './MyInput';

export default function FocusOnMount() {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('Taylor');
  const [lastName, setLastName] = useState('Swift');

  return (
    <>
      <FlexBox>
        <DecoratedButton
          caption={`${showForm ? 'Hide' : 'Show'} form`}
          onClick={() => setShowForm(!showForm)}
        />
        {showForm && (
          <>
            <MyInput
              shouldFocus={false}
              label="Enter first name"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <MyInput
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
}
