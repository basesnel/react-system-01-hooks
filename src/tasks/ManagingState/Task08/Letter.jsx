import PropTypes from 'prop-types';
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

Letter.propTypes = {
  letter: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default Letter;
