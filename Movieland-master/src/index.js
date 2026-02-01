import React from 'react';
import ReactDom from 'react-dom';
import { createRenderer } from 'react-dom/test-utils';
import App from './App';

ReactDom.render(<App />, document.getElementById('root'));