import { FC } from 'react';

// Spot the issue
export const Example2: FC<{name: string}> = (name = 'You') => {
  return <h1>Hello {name}!</h1>;
};

export const reason = () => {
  // props type props coercion to string
  // string variable not a ReactNode
  return;
}