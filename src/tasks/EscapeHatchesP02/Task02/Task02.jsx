import { useState, useMemo } from 'react';
import { RiAddCircleFill } from 'react-icons/ri';
import { CheckBox, MiniForm, List, Item, ItemFlex, ItemText } from 'components';
import { myTodos } from 'constants';

const { initialTodos, createTodo, getVisibleTodos } = myTodos;

const Task02 = () => {
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
      <CheckBox
        name="aciveTaskstT02"
        checked={showActive}
        onChange={e => setShowActive(e.target.checked)}
        label="Show only active todos"
      />

      <MiniForm
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
};

export default Task02;
