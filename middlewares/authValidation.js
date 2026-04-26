const _ = require('lodash');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { ERROR_MESSAGE } = require('../constants/messages');

const logInValidation = async (req, res, next) => {
    let identifier = _.trim(req.body.username) || _.trim(req.body.email) || _.trim(req.body.mobile);
    let password = _.trim(req.body.password);

    if (!identifier) {
        return next({ code: 'error', message: ERROR_MESSAGE.IDENTIFIER_EMPTY });
    } else if (!password) {
        return next({ code: 'error', message: ERROR_MESSAGE.PASSWORD_EMPTY });
    }

    try {
        const user = await User.findOne({ $or: [{ username: identifier }, { email: identifier }, { mobile: identifier }] });

        if (!user) {
            return next({ code: 'error', message: ERROR_MESSAGE.USER_DOES_NOT_EXIST });
        }

        if (await bcrypt.compare(password, user.password)) {
            req.user = user;
            next();
        } else {
            return next({ code: 'error', message: ERROR_MESSAGE.INVALID_PASSWORD });
        }
    } catch (error) {
        console.error('MongoDB Error...', error);
        return next({ code: 'error', message: ERROR_MESSAGE.QUERYEXECUTE });
    }
};

module.exports = logInValidation;
