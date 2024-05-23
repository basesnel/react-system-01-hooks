import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';

import FlexBox from 'components/FlexBox';
import Select from 'components/Select';
import Paragraph from 'components/Paragraph';

import { fetchBio } from 'services';

import { personList } from 'constants';

const Task12 = () => {
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
        <Select
          selectLabel="Choose the person: "
          selectName="Person"
          selected={person}
          list={personList}
          icon={<FiUser />}
          onHandleSelect={e => setPerson(e.target.value)}
        />
      </FlexBox>
      <Paragraph>
        <i>{bio ?? 'Loading...'}</i>
      </Paragraph>
    </>
  );
};

export default Task12;
