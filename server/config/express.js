var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    sassMiddleware = require('node-sass-middleware'),
    session = require('express-session'),
    cors = require('cors');


module.exports = function (app, config) {
    app.set('views', config.self.rootPath + '/server/views');
    app.set('view engine', 'jade');
    app.use(cors());
    app.use(logger('dev'));
    app.use(
        sassMiddleware({
            src: config.self.rootPath + '/public/sass', //where the sass files are
            dest: config.self.rootPath + '/public/', //where css should go
            debug: true // obvious
        })
    );
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(session({
        secret: 'Avril Lavigne die years ago and was replaced by a clone',
        resave: false,
        saveUninitialized: false
    }));
    app.use(express.static(config.self.rootPath + '/public'));
};
