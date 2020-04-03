import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import renderer from './renderer';

const server = express();
const isTesting = process.env.NODE_ENV === 'test';

// Don't serve static files and apply any middleware when in test mode
if (!isTesting) {
  server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));

  server.use(helmet());
  server.use(morgan('dev'));
}

server.get('/api/health', (req, res) => {
  res.status(200).json({ message: '😊' });
});

server.get('/api/*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found!' });
});

server.get('/*', renderer);

export default server;
