import { useState } from 'react';
import {
  CheckBox,
  List,
  Item,
  ItemFlex,
  ItemText,
  Paragraph,
} from 'components';
import { myTodos } from 'constants';
import { NewTodo } from '../intendendComponents';

const { initialTodos } = myTodos;

const Task01 = () => {
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
};

export default Task01;
