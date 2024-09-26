import { createServer } from 'http'
import { createPageRender } from 'vite-plugin-ssr'

const renderPage = createPageRender({ isProduction: process.env.NODE_ENV === 'production', root: `${process.cwd()}/` })

createServer((req, res) => {
  let url = req.url
  // Map the '/' route to the '/home' page
  if (url === '/') {
    url = '/home'
  }
  renderPage(url).then(pageContext => {
    const {html} = pageContext
    res.end(html)
  })
}).listen(3000)