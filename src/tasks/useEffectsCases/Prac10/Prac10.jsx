import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';
import Select from 'components/Select';
import Paragraph from 'components/Paragraph';

import { fetchBio } from 'services/fetchBio';

import { personList } from 'constants';

const Prac10 = () => {
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
        <Select
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
};

export default Prac10;
