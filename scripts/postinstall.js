const exec = require('child_process').exec;

if (process.env.POST_INSTALL) {
  exec('razzle build', (err, stdout) => {
    process.stdout.write(stdout);
  });
} else {
  console.log('Skipping post-install build because POST_INSTALL is not set!');
}
