// Spot the issue
// export const Example1 = ({name = 'You'}) => {
//   const name = 'Me';
//   return <h1>Hello {name}!</h1>;
// };
export const Example1 = ({name = 'You'}) => {
  const label = 'World';
  const label = 'World';
  return <h1>Hello {label}!</h1>;
};

export const reason = () => {
  // unused variable
  // redeclaring block scoped variable
  return;
}