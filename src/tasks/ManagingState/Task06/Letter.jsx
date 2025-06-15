// import PropTypes from 'prop-types';
// import { RiDeleteBinFill } from 'react-icons/ri';
// import { List, Item, ItemLabel, IconButton, ItemCheckedText } from 'components';

import styles from './styles.module.css';

const Letter = props => {
  const { letter, isHighlighted, onHover, onToggleStar } = props;

  return (
    <li
      className={isHighlighted ? `${styles.highlighted}` : ''}
      onFocus={() => {
        onHover(letter.id);
      }}
      onPointerMove={() => {
        onHover(letter.id);
      }}
    >
      <button
        onClick={() => {
          onToggleStar(letter);
        }}
      >
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
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
