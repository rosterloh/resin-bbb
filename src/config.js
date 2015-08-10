'use strict';

/**
 * Default configuration options
 */
module.exports = {
    // The www root path that the static server should serve
    webRootPath: process.env.STATIC_WEBROOT,

    // Static middleware options
    // see: https://github.com/expressjs/serve-static#options
    staticOptions: {
        index:  false,  // Fall through to SPA catch-all for index.html
        maxAge: 0       // far-future cache control
    },

    // For SPA routes, send an index. Filename is relative to webRootPath.
    indexFile: 'index.html',

    // On 404 errors, send a custom page. File is relative to webRootPath.
    custom404Page: false, // '404.html'

    // On all other errors, send a custom page. File is relative to webRootPath.
    customErrorPage: false, // '500.html'

    // The route endpoint to provide an 'OK' status for health checks (will not log request)
    statusRoute: false,

    // Wait for connections to close before stopping server
    isGracefulShutdownEnabled: (process.env.STATIC_GRACEFUL_SHUTDOWN === '1'),

    // Enable this if behind a secure reverse proxy, like heroku
    isBehindProxy: (process.env.STATIC_REV_PROXY === '1'),

    // Server port. For ports 80 or 443, must be started as superuser
    port: parseInt(process.env.STATIC_PORT || process.env.PORT || 8000),

    // Enable for HTTPS
    isSslEnabled: (process.env.STATIC_SSL === '1'),

    // HTTPS key/cert file paths
    sslKeyFile: process.env.STATIC_SSL_KEY,
    sslCertFile: process.env.STATIC_SSL_CERT,

    // Limits maximum incoming headers count. If set to 0 - no limit will be applied.
    maxHeadersCount: 1000,

    // The number of milliseconds of inactivity before a socket is presumed to have timed out.
    serverTimeout: 2 * 60 * 1000 // 2 minutes
};
