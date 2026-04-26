const CODE = require('../constants/codes.js');

/**
 * Custom error handler middleware.
 * @param {Error} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 */
const customErrorHandler = (err, req, res, next) => {
    var code    = !isObjectNullOrEmpty(err.code) ? err.code : 500;
    console.log('ErrorHandler....', err);
    res.status(CODE[code]);
    res.send(err);
};

function isObjectNullOrEmpty(obj) {
    return (
        obj === null ||
        obj === undefined ||
        (typeof obj === 'object' &&
            (Array.isArray(obj) ? obj.length === 0 : Object.keys(obj).length === 0)) ||
        (typeof obj === 'number' && obj === 0) // Change this condition to obj === 0
    );
}

/**
 * Uncaught exception handler function.
 * @param {Express.Application} app - The Express application.
 * @returns {Function} - The uncaught exception handler function.
 */
function uncaughtExceptionHandler(app) {
    return (error) => {
        if (app.env === 'development') {
            console.error('An uncaughtException error has occurred. %s', error);
        } else {
            console.error('An uncaughtException error has occurred.');
            process.exit(1);
        }
    };
}

module.exports = {
    customErrorHandler,
    uncaughtExceptionHandler
};