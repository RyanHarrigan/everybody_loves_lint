export const FExample1 = ({name = 'Formatted'}) => {
  return <h1 className={'lg:max-w-[20rem] lg:w-[25%] w-[100%] min-w-[10rem] bg-dark-blue pt-[1rem] pb-[1rem] p-[1.5rem] mt-[-3rem] text-[1.3rem] text-white'}>Hello {name}!</h1>;
};