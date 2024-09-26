import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'; // Import StaticRouter for SSR
import Header from '../components/Header';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'; // Updated import

async function render(pageContext) {
  const url = pageContext.urlPathname; // Use the new property
  const html = renderToString(
    <StaticRouter location={url}> 
      <Header />
      <h1>Hello, world!</h1>
    </StaticRouter>
  );

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>TophersManDr</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(html)}</div>
        <script type="module" src="/client-entry.js"></script>
      </body>
    </html>`;

  return { documentHtml, pageContext: { } }; // Avoid returning the entire pageContext
}

export { render };
