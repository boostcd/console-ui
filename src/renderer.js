// TODO: Clean up and split up all the different logic handling styled-components, variables set on window object, etc
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from './App';
import configureStore from './store';

const store = configureStore();
const sheet = new ServerStyleSheet();

const statsFile = path.resolve('build/loadable-stats.json');
const extractor = new ChunkExtractor({
  statsFile,
  entrypoints: ['client'],
});

export default (req, res) => {
  const context = {};
  const html = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <StaticRouter context={context} location={req.url}>
        <Provider store={store}>
          <StyleSheetManager sheet={sheet.instance}>
            <App />
          </StyleSheetManager>
        </Provider>
      </StaticRouter>
    </ChunkExtractorManager>
  );

  const styleTags = sheet.getStyleTags();
  const scriptTags = extractor.getScriptTags();

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
      <html lang="">
        <head>
          <meta charset="utf-8" />
          <title>${process.env.PRODUCT_DESCRIPTION}</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#2BA2B8" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
          ${styleTags}
        </head>
        <body>
          <div id="root">${html}</div>
          ${scriptTags}
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())};
            window.boost = ${JSON.stringify({
              BUILD_API_SERVICE_URI: process.env.BUILD_API_SERVICE_URI,
              TEST_API_SERVICE_URI: process.env.TEST_API_SERVICE_URI,
              PROD_API_SERVICE_URI: process.env.PROD_API_SERVICE_URI,
              PRODUCT_DESCRIPTION: process.env.PRODUCT_DESCRIPTION,
            })};
          </script>
        </body>
      </html>`
    );
  }
};
