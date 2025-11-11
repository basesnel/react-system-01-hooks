// import PropTypes from 'prop-types';
// import { Button } from 'components';

// import styles from './styles.module.css';

const ContactList = ({ contacts, selectedId, onSelect }) => {
  return (
    <section>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact.id);
              }}
            >
              {contact.id === selectedId ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       name: PropTypes.string.isRequired,
//       email: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onSelect: PropTypes.func.isRequired,
// };

export default ContactList;
