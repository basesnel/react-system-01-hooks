import PropTypes from 'prop-types';
import { FlexBox, Button } from 'components';

const ContactListT03 = props => {
  const { contacts, selectedId, onSelect } = props;

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
};

ContactListT03.propTypesT03 = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ContactListT03;
