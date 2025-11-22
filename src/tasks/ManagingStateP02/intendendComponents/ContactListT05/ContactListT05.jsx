import PropTypes from 'prop-types';
import { Button } from 'components';

import styles from './styles.module.css';

const ContactListT05 = ({ contacts, selectedId, onSelect }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Button
            caption={
              contact.id === selectedId ? <b>{contact.name}</b> : contact.name
            }
            full
            onClick={() => {
              onSelect(contact.id);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

ContactListT05.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ContactListT05;
