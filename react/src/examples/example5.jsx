import {useState, useEffect} from 'react';

// Spot the issue
export const Example4 = ({todos = []}) => {
  const [checkedTodos, setCheckedTodos] = useState();

  return <div>
    {todos.map((todo, _idx) => <div key={`todo-${_idx}`}>{todo.name}</div>)}
  </div>;
};

export const reason = () => {
  // unused import
  // unused variable
  return;
}