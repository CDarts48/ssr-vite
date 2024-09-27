import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import Header from '../components/Header';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server';
import { ServerStyleSheet } from 'styled-components';
import ServiceSection from '../components/ServiceSection';

async function render(pageContext) {
  const sheet = new ServerStyleSheet(); // Create a new ServerStyleSheet

  const url = pageContext.urlPathname; // Get the URL from the pageContext
  const html = renderToString(
    sheet.collectStyles( // Collect styles for SSR
      <StaticRouter location={url}>
        <Header />
        <ServiceSection />
        <h1>Hello, world!</h1>
      </StaticRouter>
    )
  );

  const css = sheet.getStyleTags(); // Extract the CSS

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <title>TophersManDr</title>
        ${dangerouslySkipEscape(css)} <!-- Include the CSS in the HTML -->
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(html)}</div>
        <script type="module" src="/client-entry.js"></script> <!-- Your client entry script -->
      </body>
    </html>`;

  return { documentHtml, pageContext: { /* add specific properties here if needed */ } };
}

export { render };
