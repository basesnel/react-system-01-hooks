import { useState } from 'react';
import { FiEdit3, FiArrowLeftCircle } from 'react-icons/fi';
import {
  Title,
  List,
  Item,
  ItemFlex,
  Input,
  IconButton,
  Paragraph,
  Span,
} from 'components';
import { initialItems } from 'constants';

const Prac07 = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item => item.id === selectedId);

  const handleItemChange = (id, e) => {
    setItems(
      items.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <Title level={3} caption="what's your travel snack?" />
      <List message="There is no elements in list.">
        {items.map(item => (
          <Item key={item.id}>
            <ItemFlex>
              <Input
                inputType="text"
                inputName={`pickedP07${item.id}`}
                inputValue={item.title}
                handleChange={e => handleItemChange(item.id, e)}
                icon={<FiEdit3 />}
              />
              <IconButton
                icon={<FiArrowLeftCircle />}
                caption="choose"
                onClick={() => {
                  setSelectedId(item.id);
                }}
              />
            </ItemFlex>
          </Item>
        ))}
      </List>
      <Paragraph centered>
        You picked: <Span weighted>{selectedItem.title}</Span>.
      </Paragraph>
    </>
  );
};

export default Prac07;
