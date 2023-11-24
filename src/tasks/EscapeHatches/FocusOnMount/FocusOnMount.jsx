import { useState } from 'react';

import DecoratedButton from 'components/DecoratedButton';
import FlexBox from 'components/FlexBox';
import Paragraph from 'components/Paragraph';
import MyInput from './MyInput';
import Span from 'components/Span';

export default function FocusOnMount() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('Taylor');
  const [upper, setUpper] = useState(false);

  return (
    <>
      <FlexBox>
        <DecoratedButton
          caption={`${showForm ? 'Hide' : 'Show'} form`}
          onClick={() => setShowForm(!showForm)}
        />
        {showForm && (
          <>
            <MyInput value={name} onChange={e => setName(e.target.value)} />
            <label>
              <input
                type="checkbox"
                checked={upper}
                onChange={() => setUpper(!upper)}
              />
              <Span>Make it uppercase</Span>
            </label>
            <Paragraph>
              Hello, <b>{upper ? name.toUpperCase() : name}</b>
            </Paragraph>
          </>
        )}
      </FlexBox>
    </>
  );
}
