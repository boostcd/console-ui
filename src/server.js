import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import renderer from './renderer';

const server = express();

server.use(express.static(process.env.RAZZLE_PUBLIC_DIR));
server.use(helmet());
server.use(morgan('dev'));

server.get('/api/health', (req, res) => {
  res.status(200).json({ health: '😊' });
});

server.get('/*', renderer);

export default server;
