import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import AppProvider from './store/context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <AppProvider>
      <App />
    </AppProvider>
);
