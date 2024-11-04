import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import ejs from 'ejs';
import Header from '../components/Header';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'; // Added createGlobalStyle
import ServiceSection from '../components/ServiceSection';
import HeroSection from '../components/Hero';
import Reviews from '../components/Reviews';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Added GlobalStyle component
const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(246, 246, 246);
  }
`;

async function render(pageContext) {
  const sheet = new ServerStyleSheet(); // Create a new ServerStyleSheet

  const url = pageContext.urlPathname; // Get the URL from the pageContext
  const html = renderToString(
    sheet.collectStyles( // Collect styles for SSR
      <StaticRouter location={url}>
        <GlobalStyle /> {/* Added GlobalStyle */}
        <Header />
        <HeroSection />
        <ServiceSection />
        <Reviews />
        <ContactSection />
        <Footer />
      </StaticRouter>
    )
  );

  const css = sheet.getStyleTags(); // Extract the CSS

  const ejs = require('ejs');

  const template = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>TophersManDr</title>
      <style><%- css %></style>
    </head>
    <body>
      <div id="app"><%- html %></div>
      <script type="module" src="/client-entry.js"></script>
    </body</html>
  `;
  
  const documentHtml = ejs.render(template, { css, html });
  
  return { documentHtml, pageContext: { /* add specific properties here if needed */ } };
}

export { render };