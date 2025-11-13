import { useState } from 'react';
// import { Button, Title, FlexBox } from 'components';
// import { trams } from 'constants';

// import styles from './styles.module.css';
import Contact from './Contact';
import { initialContacts } from 'constants';

const Task07 = () => {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...initialContacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) => (
          <li key={i}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Task07;
