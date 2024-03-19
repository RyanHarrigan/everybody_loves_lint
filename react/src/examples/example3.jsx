// Spot the issue
// export const Example3 = (props) => {
//   return <h1>Hello {name}!</h1>;
// };
export const Example3 = ({name = 'You'}) => {
  return <h1>Hello World!</h1>;
};

export const reason = () => {
  // undefined variable name
  return;
}