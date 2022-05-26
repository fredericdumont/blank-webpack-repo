require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';

const appElement = document.querySelector('#app');
const root = createRoot(appElement); // createRoot(container!) if you use TypeScript

root.render(<App />);
