import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';
import DecoratedSelect from 'components/DecoratedSelect';
import Paragraph from 'components/Paragraph';

import { fetchBio } from 'services/fetchBio';

import { personList } from 'constants';

export default function FetchingData() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    async function startFetching() {
      setBio(null);
      const result = await fetchBio(person);
      if (!ignore) {
        setBio(result);
      }
    }

    let ignore = false;
    startFetching();

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
