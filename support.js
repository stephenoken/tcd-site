// var exec = require('child_process').exec;
//
// exec("scss --watch ./:./", function (error, stdout, stderr) {
//   console.log('stdout: ' + stdout);
//   if (error !== null) {
//     console.log('exec error: ' + error);
//   }
// });

var phpServer = require('node-php-server');

phpServer.createServer({
    port: 8000,
    hostname: '127.0.0.1',
    base: '.',
    keepalive: false,
    open: false,
    router: __dirname + '/index.php'
});
