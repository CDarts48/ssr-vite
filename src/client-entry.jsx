import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('app'));

// Render the app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)