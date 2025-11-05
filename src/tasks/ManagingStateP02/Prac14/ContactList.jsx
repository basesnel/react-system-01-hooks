import { Button, FlexBox } from 'components';

const ContactList = ({ contacts, onSelect }) => {
  return (
    <FlexBox>
      {contacts.map(contact => (
        <Button
          caption={contact.name}
          onClick={() => {
            onSelect(contact);
          }}
        />
      ))}
    </FlexBox>
  );
};

export default ContactList;
