import { createRoot } from 'react-dom/client';

import { ESLintExamples } from './eslint-app';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<ESLintExamples />);