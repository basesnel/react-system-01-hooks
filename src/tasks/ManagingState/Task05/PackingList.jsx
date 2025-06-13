import { RiDeleteBinFill } from 'react-icons/ri';
import { List, Item, ItemLabel, IconButton, ItemCheckedText } from 'components';

const PackingList = props => {
  const { items, onChangeItem, onDeleteItem } = props;

  return (
    <List message="There is no elements in list.">
      {items.map(item => (
        <PackingItem
          item={item}
          onChangeItem={onChangeItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </List>
  );
};

const PackingItem = props => {
  const { item, onChangeItem, onDeleteItem } = props;

  return (
    <Item key={item.id}>
      <ItemLabel>
        <input
          type="checkbox"
          name={item.id}
          checked={item.packed}
          onChange={e => {
            onChangeItem({ ...item, packed: e.target.checked });
          }}
        />
        <ItemCheckedText content={item.title} checked={item.packed} />
        <IconButton
          icon={<RiDeleteBinFill />}
          caption="delete"
          onClick={() => onDeleteItem(item.id)}
        />
      </ItemLabel>
    </Item>
  );
};

export default PackingList;
