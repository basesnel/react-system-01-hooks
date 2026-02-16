import { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import { FlexBox, Select, P } from 'components';
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
          label="Choose the person: "
          name="PersonT12"
          value={person}
          list={personList}
          icon={<FiUser />}
          onChange={e => setPerson(e.target.value)}
        />
      </FlexBox>
      <P>
        <i>{bio ?? 'Loading...'}</i>
      </P>
    </>
  );
};

export default Task12;
