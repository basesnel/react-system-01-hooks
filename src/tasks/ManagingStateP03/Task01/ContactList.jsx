import PropTypes from 'prop-types';
import { Button } from 'components';

import styles from './styles.module.css';

const ContactList = ({ contacts, selectedId, dispatch }) => {
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
              dispatch({
                type: 'changed_selection',
                contactId: contact.id,
              });
            }}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedId: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ContactList;
