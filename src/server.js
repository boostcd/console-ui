import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './App';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

const isProduction = process.env.NODE_ENV === 'production';

server.disable('x-powered-by');
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));

server.get('/*', (req, res) => {
  const context = {};
  const markup = renderToString(
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    res.status(200).send(
      `<!doctype html>
      <html lang="">
        <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charset="utf-8" />
          <title>Estafet Boost</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${
            isProduction
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`
          }
        </head>
        <body>
          <div id="root">${markup}</div>
        </body>
      </html>`
    );
  }
});

export default server;
