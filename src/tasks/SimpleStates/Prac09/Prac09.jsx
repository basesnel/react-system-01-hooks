import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

import { MiniForm } from 'components';
import { HideOverflow } from 'components';
import { List } from 'components';
import { Item } from 'components';
import { ItemFlex } from 'components';
import { ItemText } from 'components';

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

const Prac09 = () => {
  const [todos, setTodos] = useState(createInitialTodos());
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

export default Prac09;
