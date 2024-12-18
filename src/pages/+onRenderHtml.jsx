import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import App from '../components/App';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(246, 246, 246);
  }
`;

export async function onRenderHtml(pageContext) {
  const { url } = pageContext;
  const sheet = new ServerStyleSheet();
  const appHtml = renderToString(
    sheet.collectStyles(
      <StaticRouter location={url}>
        <GlobalStyle />
        <App />
      </StaticRouter>
    )
  );
  const css = sheet.getStyleTags();

  const documentHtml = escapeInject`<!DOCTYPE html>
  <html>
    <head>
      <title>TophersManDr</title>
      <style>${dangerouslySkipEscape(css)}</style>
    </head>
    <body>
      <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      <script type="module" src="/client-entry.js"></script>
    </body>
  </html>`;

  return { documentHtml, pageContext: { /* add specific properties here if needed */ } };
}e