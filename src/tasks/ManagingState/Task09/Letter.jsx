// import PropTypes from 'prop-types';
import { ItemCheckedText } from 'components';

import styles from './styles.module.css';

const Letter = props => {
  const { letter, onToggle, isSelected } = props;

  return (
    <li
      className={
        isSelected ? `${styles.letter} ${styles.highlighted}` : styles.letter
      }
    >
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        <ItemCheckedText content={letter.subject} checked={isSelected} />
      </label>
    </li>
  );
};

// PackingList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       title: PropTypes.string.isRequired,
//       packed: PropTypes.bool.isRequired,
//     }).isRequired
//   ).isRequired,
//   onChangeItem: PropTypes.func.isRequired,
//   onDeleteItem: PropTypes.func.isRequired,
// };

// PackingItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     title: PropTypes.string.isRequired,
//     packed: PropTypes.bool.isRequired,
//   }).isRequired,
//   onChangeItem: PropTypes.func.isRequired,
//   onDeleteItem: PropTypes.func.isRequired,
// };

export default Letter;
