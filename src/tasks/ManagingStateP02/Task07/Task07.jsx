import { useState } from 'react';
import { FlexBox, CheckBox, List, Item } from 'components';
import { initialContacts } from 'constants';
import { ContactT07 } from '../intendendComponents';

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
            <ContactT07 contact={contact} />
          </Item>
        ))}
      </List>
    </>
  );
};

export default Task07;
