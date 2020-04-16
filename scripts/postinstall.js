const { exec } = require('child_process');

if (process.env.POST_INSTALL) {
  exec('razzle build', (err, stdout) => {
    process.stdout.write(stdout);
  });
} else {
  // eslint-disable-next-line no-console
  console.log('Skipping post-install build because POST_INSTALL is not set!');
}
