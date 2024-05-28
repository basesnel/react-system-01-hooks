import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import { RiAddCircleFill } from 'react-icons/ri';

import { HideOverflow } from 'components';
import { List } from 'components';
import { Item } from 'components';
import { ItemFlex } from 'components';
import { ItemText } from 'components';
import { MiniForm } from 'components';

const Prac09 = () => {
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
      <MiniForm
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
};

let nextId = 0;
const initialTodos = [];

for (let i = 0; i < 20; i++) {
  initialTodos.push({
    id: nextId++,
    text: 'Todo #' + (i + 1).toString().padStart(2, '0'),
  });
}

export default Prac09;
