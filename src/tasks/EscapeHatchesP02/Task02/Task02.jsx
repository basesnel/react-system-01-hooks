import DecoratedCheckBox from 'components/DecoratedCheckBox/DecoratedCheckBox.jsx';
import DecoratedMiniForm from 'components/DecoratedMiniForm/DecoratedMiniForm.jsx';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText/ItemText';
import { RiAddCircleFill } from 'react-icons/ri';
import { useState, useMemo } from 'react';
import { initialTodos, createTodo, getVisibleTodos } from './todos.js';

export default function Task02() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const [text, setText] = useState('');

  const visibleTodos = useMemo(
    () => getVisibleTodos(todos, showActive),
    [todos, showActive]
  );

  function handleAddClick(text) {
    setText('');
    setTodos([...todos, createTodo(text)]);
  }

  return (
    <>
      <DecoratedCheckBox
        name="Task02 act"
        checked={showActive}
        onChange={e => setShowActive(e.target.checked)}
        label="Show only active todos"
      />

      <DecoratedMiniForm
        onFormSubmit={handleAddClick}
        filling={`Add todo-element ${text}`}
        icon={<RiAddCircleFill />}
      />
      <List message="There no element in list.">
        {visibleTodos.map(todo => (
          <Item key={todo.id}>
            <ItemFlex>
              <ItemText
                content={todo.completed ? <s>{todo.text}</s> : todo.text}
              />
            </ItemFlex>
          </Item>
        ))}
      </List>
    </>
  );
}
