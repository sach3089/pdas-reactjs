import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');
const root = ReactDOMClient.createRoot(el);

root.render(<App />);