const { isEmailValid, verifyTokenToken, comparePassword, sendEmail,CryptoEncrypt,CryptoDecrypt } =  require('../utilityMethods/common.js');
const connection    = require('../config/database.js');
const ERROR_MESSAGE = require('../constants/error-message');
const _             =  require('lodash');

exports.validateToken = async function (req, res, next) {
    console.log(req.path);
    if (req.path === '/login' || req.path === '/register' || req.path === '/resetPassword'  || req.path === '/login-with-otp'  || req.path === '/updatePassword' ) {
        next();
    } else {
        let returnedObject = {};
        console.log(req.headers);
        let authHeader   = req.headers['authorization'];
        let email        = (req.headers['email']);
        let username     = (req.headers['username']);
        /* let account_id   = req.headers['account_id'];
        let onebilling   = req.headers['onebilling']; */
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next({ code: 'error', message: "Bearer token not found in Authorization header"});
        }
        const token = (authHeader.split(' ')[1]);
        if (!email) {
            returnedObject = { code: "InvalidHeader", message: ERROR_MESSAGE.NO_EMAIL_IN_HEADER };
            return next(returnedObject); 
        } else if (!token) {
            returnedObject = { code: "InvalidHeader", message: ERROR_MESSAGE.NO_TOKEN_IN_HEADER };
            return next(returnedObject); // Pass the error to the next middleware
        }
        if (email) {
            try {
                const result = await verifyTokenToken(token, email, username);
                if (result.isTokenVerified) {
                    req.decodedToken = result.decoded;
                    next();
                } else {
                    returnedObject = { code: "Unauthorized", message: ERROR_MESSAGE.INVALID_UPDATED_TOKEN };
                    return next(returnedObject);
                }
            } catch (error) {
                console.log('Log out error...', error);
                return next({ code: "error", logout: true, message: 'Your previous session has timed out. Please sign in again', error });
            }
        } else {
            returnedObject = { code: "InvalidHeader", message: ERROR_MESSAGE.NO_EMAIL_IN_HEADER };
            return next(returnedObject); 
        }
    }
};
