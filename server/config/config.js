var path = require('path');

var utils = require('../utilities/utils');
var rootPath = path.normalize(__dirname + '/../../');

function isEnv(e) {
    return process.env.NODE_ENV === e;
}

function createKey(name) {
    return 'SLO_' + name.toUpperCase();
}

function setEnv(name, defaultValue, override) {
    var key = createKey(name);
    if (override)
        process.env[key] = defaultValue;
    else
        process.env[key] = process.env[key] || defaultValue;
}

function getEnv(name) {
    var key = createKey(name);
    return process.env[key];
}

if (isEnv('dev')) {
    setEnv('port', 8080);
} else if (isEnv('prod')) {
    setEnv('port', 8081);
}

var config = {
    self: {
        port: getEnv('port'),
        env: process.env.NODE_ENV,
        rootPath: rootPath
    }
};

console.log(utils.inspect(config));
module.exports = config;
