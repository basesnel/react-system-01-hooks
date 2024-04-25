import Button from 'components/Button';
import FlexBox from 'components/FlexBox';

export default function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <FlexBox>
      {contacts.map(contact => (
        <Button
          key={contact.id}
          caption={
            contact.id === selectedId ? <b>{contact.name}</b> : contact.name
          }
          onClick={() => {
            onSelect(contact.id);
          }}
        />
      ))}
    </FlexBox>
  );
}
