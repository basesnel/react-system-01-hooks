import { useState } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';

import DecoratedMiniForm from 'components/DecoratedMiniForm';
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

export default function LazyExample() {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState('');

  return (
    <>
      {/* <input value={text} onChange={e => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('');
          setTodos([{ id: todos.length, text: text }, ...todos]);
        }}
      >
        Add
      </button> */}
      <DecoratedMiniForm
        onFormSubmit={text => {
          setText(text);
          setTodos([{ id: todos.length, text: text }, ...todos]);
          setText('');
        }}
        filling={`Add element ${text}`}
        icon={<RiAddCircleFill />}
      />
      <List message="Please, add an element to list.">
        {todos.map(({ id, text }) => (
          <Item key={id}>
            <ItemFlex>
              <ItemText content={text} />
            </ItemFlex>
          </Item>
        ))}
      </List>
    </>
  );
}
