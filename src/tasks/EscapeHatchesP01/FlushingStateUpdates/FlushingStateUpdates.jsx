import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { RiAddCircleFill } from 'react-icons/ri';

import HideOverflow from 'components/HideOverflow';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText';
import DecoratedMiniForm from 'components/DecoratedMiniForm';

export default function FlushingStateUpdates() {
  const listRef = useRef(null);
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  function handleAdd(text) {
    const newTodo = { id: nextId++, text: text };

    flushSync(() => {
      setText('');
      setTodos([...todos, newTodo]);
    });

    listRef.current.lastChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }

  return (
    <>
      <DecoratedMiniForm
        onFormSubmit={text => handleAdd(text)}
        filling={`Add element ${text}`}
        icon={<RiAddCircleFill />}
      />
      <HideOverflow>
        <List message="There is no elements" listRef={listRef}>
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
}

let nextId = 0;
const initialTodos = [];
for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1),
  });
}
