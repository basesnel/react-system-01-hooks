import { useState } from 'react';
import { FlexBox, CheckBox, List, Item } from 'components';
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
      <FlexBox>
        <CheckBox
          name="checkboxTask07"
          checked={reverse}
          onChange={e => setReverse(e.target.checked)}
          label="Show in reverse order"
        />
      </FlexBox>
      <List message="There is no items!">
        {displayedContacts.map(contact => (
          <Item key={contact.id}>
            <Contact contact={contact} />
          </Item>
        ))}
      </List>
    </>
  );
};

export default Task07;
