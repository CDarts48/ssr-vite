import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import Header from '../components/Header';
import ServiceSection from '../components/ServiceSection';
import HeroSection from '../components/Hero';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(246, 246, 246);
  }
`;

async function render(pageContext) {
  const sheet = new ServerStyleSheet();
  const url = pageContext.urlPathname;
  const html = renderToString(
    sheet.collectStyles(
      <StaticRouter location={url}>
        <GlobalStyle />
        <Header />
        <HeroSection />
        <ServiceSection />
        <Reviews />
        <ContactSection />
        <Footer />
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
      <div id="app">${dangerouslySkipEscape(html)}</div>
      <script type="module" src="/client-entry.js"></script>
    </body>
  </html>`;

  return { documentHtml, pageContext: { /* add specific properties here if needed */ } };
}

export { render };