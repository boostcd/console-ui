import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from './App';
import configureStore from './store/configureStore';

const store = configureStore();
const sheet = new ServerStyleSheet();

// Mocking the loadable stats file for the tests
const isTesting = process.env.NODE_ENV === 'test';
const statsFileRoot = isTesting ? 'src/__mocks__' : 'build';
const statsFile = path.resolve(`${statsFileRoot}/loadable-stats.json`);

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

  const styledComponentsTags = sheet.getStyleTags();
  const styleTags = extractor.getStyleTags();
  const scriptTags = extractor.getScriptTags();

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>${process.env.PRODUCT_DESCRIPTION}</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#2BA2B8" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet">
          ${styleTags}
          ${styledComponentsTags}
        </head>
        <body>
          <div id="root">${html}</div>
          ${scriptTags}
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())};
            window.__GLOBALS__= {
              PRODUCT: ${JSON.stringify(process.env.PRODUCT)},
              PRODUCT_DESCRIPTION: ${JSON.stringify(process.env.PRODUCT_DESCRIPTION)},
              TASK_MANAGEMENT_TITLE: ${JSON.stringify(process.env.TASK_MANAGEMENT_TITLE)},
              GATEWAY_API_SERVICE_URI: ${JSON.stringify(process.env.GATEWAY_API_SERVICE_URI)},
            };
          </script>
        </body>
      </html>`
    );
  }
};
