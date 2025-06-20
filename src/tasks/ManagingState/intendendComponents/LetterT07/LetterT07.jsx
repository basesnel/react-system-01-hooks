import PropTypes from 'prop-types';

import styles from './styles.module.css';

const LetterT07 = props => {
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
        {letter.subject}
      </label>
    </li>
  );
};

LetterT07.propTypes = {
  letter: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    isStarred: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default LetterT07;
