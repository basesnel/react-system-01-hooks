import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';
import DecoratedSelect from 'components/DecoratedSelect';
import Paragraph from 'components/Paragraph';

import { fetchBio } from './api';

const personList = ['Alice', 'Bob', 'Taylor'];

export default function FetchingData() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    let ignore = false;

    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result);
      }
    });

    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <FlexBox>
        <DecoratedSelect
          selectLabel="Choose the person: "
          selectName="Person"
          selected={person}
          list={personList}
          icon={<FiUser />}
          onHandleSelect={e => setPerson(e.target.value)}
        />
      </FlexBox>
      <Paragraph>{bio ?? 'Loading...'}</Paragraph>
    </>
  );
}
