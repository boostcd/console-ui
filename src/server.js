import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import renderer from './renderer';

const server = express();

server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
server.use(helmet());
server.use(morgan(':date[iso] :method :url :status :response-time ms'));

server.get('/api/health', (req, res) => {
  res.status(200).json({ message: '😊' });
});

server.get('/api/*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found! ' });
});

server.get('/*', renderer);

export default server;
