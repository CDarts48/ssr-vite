import { createPageRender } from 'vite-plugin-ssr';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

const renderPage = createPageRender({ isProduction: process.env.NODE_ENV === 'production' });

export async function render(url, manifest) {
  const pageContextInit = { url };
  const pageContext = await renderPage(pageContextInit);
  const { html } = pageContext;

  const appHtml = renderToString(<App />);

  const finalHtml = html.replace('<!--app-html-->', appHtml);

  return finalHtml;
}