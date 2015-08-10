'use strict';

var server = require('./src');

server.start({
    webRootPath:   __dirname + '/public',
    custom404Page: '404.html'
});

// Use environment variables for other options:
//   NODE_ENV=production STATIC_SSL=1 STATIC_PORT=443 node start.js
