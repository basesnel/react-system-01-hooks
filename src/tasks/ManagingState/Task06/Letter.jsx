import PropTypes from 'prop-types';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IconButton, ItemFlex } from 'components';
import styles from './styles.module.css';

const Letter = props => {
  const { letter, isHighlighted, onHover, onToggleStar } = props;

  return (
    <li
      className={
        isHighlighted ? `${styles.letter} ${styles.highlighted}` : styles.letter
      }
      onFocus={() => {
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <ItemFlex>
        <IconButton
          caption={letter.isStarred ? 'Star' : 'Unstar'}
          icon={letter.isStarred ? <FaStar /> : <FaRegStar />}
          onClick={() => {
            onToggleStar(letter);
          }}
        />
        {letter.subject}
      </ItemFlex>
    </li>
  );
};

Letter.propTypes = {
  letter: PropTypes.shape({
    id: PropTypes.number.isRequired,
    subject: PropTypes.string.isRequired,
    isStarred: PropTypes.bool.isRequired,
  }).isRequired,
  isHighlighted: PropTypes.bool.isRequired,
  onHover: PropTypes.func.isRequired,
  onToggleStar: PropTypes.func.isRequired,
};

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
