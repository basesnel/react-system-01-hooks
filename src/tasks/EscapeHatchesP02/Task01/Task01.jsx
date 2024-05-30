import { useState } from 'react';

// import PropTypes from 'prop-types';

// import { RiAddCircleFill } from 'react-icons/ri';

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

const Task01 = () => {
  const { initialTodos } = myTodos;

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

// const NewTodo = props => {
//   const { onAdd } = props;

//   const [text, setText] = useState('');

//   function handleAddClick(text) {
//     setText('');
//     onAdd(createTodo(text));
//   }

//   return (
//     <>
//       <MiniForm
//         onFormSubmit={handleAddClick}
//         filling={`Add todo-element ${text}`}
//         icon={<RiAddCircleFill />}
//       />
//     </>
//   );
// };

// NewTodo.propTypes = {
//   onAdd: PropTypes.func.isRequired,
// };

export default Task01;
