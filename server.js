import express from 'express';
import { createPageRender } from 'vite-plugin-ssr';

const app = express();
const renderPage = createPageRender({ isProduction: process.env.NODE_ENV === 'production', root: `${process.cwd()}/` });

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('*', (req, res) => {
  let url = req.url;
  // Map the '/' route to the '/home' page
  if (url === '/') {
    url = '/home';
  }
  renderPage(url).then(pageContext => {
    const {html} = pageContext;
    res.end(html);
  });
});

app.listen(3000);