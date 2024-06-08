import PropTypes from 'prop-types';
import { List, Item, ItemLabel, ItemCheckedText } from 'components';

const ItemList = props => {
  const { artWorks, onToggle } = props;

  return (
    <List message="There is no elements in list.">
      {artWorks.map(({ id, title, seen }) => (
        <Item key={id}>
          <ItemLabel>
            <input
              type="checkbox"
              name={id}
              checked={seen}
              onChange={e => {
                onToggle(id, e.target.checked);
              }}
            />
            <ItemCheckedText content={title} checked={seen} />
          </ItemLabel>
        </Item>
      ))}
    </List>
  );
};

ItemList.propTypes = {
  artWorks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      seen: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ItemList;
