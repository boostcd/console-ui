// TODO: Clean up this whole file wih the HMR functionality
import http from 'http';

let app = require('./server').default;
const server = http.createServer(app);
let currentApp = app;

const port = PORT || 8080;

server.listen(port, (error) => {
  if (error) {
    console.log('Server failed to start with error: ', error);
  }

  console.log(`🚀 Server has started at port ${port}!`);
});

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
