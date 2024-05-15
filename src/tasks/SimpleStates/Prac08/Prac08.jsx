import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

import MiniForm from 'components/MiniForm';
import HideOverflow from 'components/HideOverflow';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1),
    });
  }
  return initialTodos;
}

const Prac08 = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <>
      <MiniForm
        onFormSubmit={text => {
          setText(text);
          setTodos([{ id: todos.length, text: text }, ...todos]);
          setText('');
        }}
        filling={`Add element ${text}`}
        icon={<RiAddCircleFill />}
      />
      <HideOverflow>
        <List message="No element is in the list...">
          {todos.map(({ id, text }) => (
            <Item key={id}>
              <ItemFlex>
                <ItemText content={text} />
              </ItemFlex>
            </Item>
          ))}
        </List>
      </HideOverflow>
    </>
  );
};

export default Prac08;
