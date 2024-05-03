import { useState } from 'react';
import { initialTodos, createTodo } from './todos';

import PropTypes from 'prop-types';

import DecoratedMiniForm from 'components/DecoratedMiniForm';
import List from 'components/List';
import Item from 'components/Item';
import ItemFlex from 'components/ItemFlex';
import ItemText from 'components/ItemText/ItemText';

import { RiAddCircleFill } from 'react-icons/ri';
import Paragraph from 'components/Paragraph';
import CheckBox from 'components/CheckBox';

export default function Task01() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const visibleTodos = showActive
    ? todos.filter(todo => !todo.completed)
    : todos;

  const countActiveTodos = todos.reduce((prevCount, todo) => {
    return todo.completed ? prevCount + 0 : prevCount + 1;
  }, 0);

  return (
    <>
      <CheckBox
        name="Task01 act"
        checked={showActive}
        onChange={e => setShowActive(e.target.checked)}
        label="Show only active todos"
      />
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
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
      <footer>
        <Paragraph>{countActiveTodos} todos left</Paragraph>
      </footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick(text) {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <DecoratedMiniForm
        onFormSubmit={handleAddClick}
        filling={`Add todo-element ${text}`}
        icon={<RiAddCircleFill />}
      />
    </>
  );
}

NewTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
