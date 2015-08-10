'use strict';

var path = require('path');
var express = require('express');
var enforceSsl = require('../middleware/enforce-ssl');
var logger = require('../middleware/request-logger');
var spaCatchRoutes = require('../middleware/spa-catch-routes');
var errorHandler = require('../middleware/error-handler');
var errors = require('./errors');

/**
 * Creates an express app with middleware appropriate for a static web server
 */
module.exports = function createApp(options) {
    var app = express();

    if (options.isBehindProxy) {
        // http://expressjs.com/api.html#trust.proxy.options.table
        app.enable('trust proxy');
    }

    // Logging requests
    app.use(logger());

    // Security middleware
    if (options.isSslEnabled) {
        app.use(enforceSsl());
    }

    if (options.statusRoute) {
        app.get(options.statusRoute, function(req, res) {
            req.skipRequestLog = true;
            res.send('OK');
        });
    }

    app.use(express.static(options.webRootPath));

    // SPA catch-all
    app.use(spaCatchRoutes(path.join(options.webRootPath, options.indexFile)));

    // 404 catch-all
    app.use(function(req, res, next) {
        next(new errors.NotFoundError());
    });

    // Error handler
    app.use(errorHandler(options));

    return app;
};
