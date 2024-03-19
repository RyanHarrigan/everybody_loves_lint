// Spot the issue
export const Example5 = ({todos = []}) => {

  return <div>
    {todos.map(todo => <div>{todo.name}</div>)}
  </div>;
};

export const reason = () => {
  // missing key in list
  return;
}

