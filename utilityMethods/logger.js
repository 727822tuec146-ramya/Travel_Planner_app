const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ format: winston.format.simple(), json: false, timestamp: true }),
        new winston.transports.File({ filename: __dirname + '/debug.log', format: winston.format.simple(), json: false })
    ],
    exceptionHandlers: [
        new winston.transports.Console({ format: winston.format.simple(), json: false, timestamp: true }),
        new winston.transports.File({ filename: __dirname + '/exceptions.log', format: winston.format.simple(), json: false })
    ],
    exitOnError: false
});

module.exports = logger;
