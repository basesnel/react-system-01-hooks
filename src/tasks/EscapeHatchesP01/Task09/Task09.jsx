import { useState } from 'react';

import Button from 'components/Button';
import FlexBox from 'components/FlexBox';
import Paragraph from 'components/Paragraph';
import MyInput from './MyInput';
import DecoratedCheckBox from 'components/DecoratedCheckBox';

export default function Task09() {
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
            <DecoratedCheckBox
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
}
