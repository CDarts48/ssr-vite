import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/App';

// Export the render function for vite-plugin-ssr
export function render(pageContext) {
  const root = document.getElementById('app');

  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    root
  );
}

// Enable client-side routing
export const clientRouting = true;