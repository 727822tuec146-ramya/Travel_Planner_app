require("dotenv").config()
const bcrypt = require('bcryptjs');
const _      = require('lodash');
const jwt    = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { DOMParser } = require('xmldom');
const CryptoJS = require("crypto-js");
//const backEndServerConfig = require('../../config/backend-server-config');
//const logger = require('./logger');
const secret     = process.env.SECRET || 'secretPassword';
const expiretime = process.env.EXPIRETIME || '1h';


exports.isEmptyVal = (value) => {
    if (typeof value === 'boolean') {
        return value ? 1 : 0; // Return 1 if true, 0 if false
    } else if (Array.isArray(value) && value.length === 0) {
        return "";
    } else if (value && typeof value === 'object' && Object.keys(value).length === 0 && value.constructor === Object){
        return "";
    } else if (!value) {
        return ''; 
    } else if (value == "{}" || value == "[]") {
        return ''; 
    }
};

exports.CryptoEncrypt = (data) => {
    return CryptoJS.AES.encrypt(data, secret).toString();
};
exports.CryptoDecrypt = (data) => {
    return CryptoJS.AES.decrypt(data, secret).toString(CryptoJS.enc.Utf8);
};

exports.encryptPassword = (password) => {
    let hash = null;
    if (!_.isEmpty(password)) {
        let salt = bcrypt.genSaltSync(10);
        hash = bcrypt.hashSync(password, salt);
    }
    return hash;
};

exports.comparePassword = (reqPassword, dbPassword) => {
    let isPasswordMatched = false;
    if (reqPassword !== '' && dbPassword !== '') {
        isPasswordMatched = bcrypt.compareSync(reqPassword, dbPassword);
    }
    return isPasswordMatched;
};

exports.verifyTokenToken = (token, email, username) => {
    return new Promise(function (resolve, reject) {
        if (token) {
            jwt.verify(token, secret, function (err, decoded) {
                if (err) {
                    //logger.error('Token verification error', err);
                    reject({ isTokenVerified: false, err });
                } else if ((decoded && decoded.email && ((decoded.email).toUpperCase() === email.toUpperCase())) || (decoded && decoded.email && ((decoded.email).toUpperCase() === username.toUpperCase()))) {
                    console.log("in");
                    // Check if the token has expired
                    const now = Date.now().valueOf() / 1000; // Convert current time to seconds
                    if (decoded.exp && decoded.exp < now) {
                        console.log("in");
                        //logger.error('Token has expired');
                        reject({ isTokenVerified: false, decoded: null });
                    } else {
                        console.log("out");
                        resolve({ isTokenVerified: true, decoded });
                    }
                } else {
                    console.log('Invalid token')
                    //logger.error('Invalid token');
                    reject({ isTokenVerified: false, decoded: null });
                }
            });
        } else {
            reject({ isTokenVerified: false, decoded: null });
        }
    });
};

/**
 * Method to validate email.
 */
exports.isEmailValid = (email) => {
    let status = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim());
    return status;
};

/**
 * method to generate JWT token.
 * @param {*} name 
 * @param {*} email 
 */
exports.generateJwtToken = (name, email) => {
    let jwtToken = null;
    if (name && email) {
        let expiresIn = expiretime;
        jwtToken      = jwt.sign({
                            name: name,
                            email: email
                        }, secret, {
                            expiresIn: expiresIn
                        });
    }
    return jwtToken;
};
exports.generateRefreshToken = (name, email) => {
    let jwtToken = null;
    if (name && email) {
        jwtToken      = jwt.sign({
                            name: name,
                            email: email
                        }, secret);
    }
    return jwtToken;
};

/**
 * method to generate JWT token.
 * @param {*} name 
 * @param {*} email 
 */
exports.generateJwtTokenForResetPassword = (name, email) => {
    let jwtToken = null;
    if (name && email) {
        jwtToken = jwt.sign({
            name: name,
            email: email
        }, secret, { expiresIn: '1h' });
    }
    return jwtToken;
};

exports.generateGuid =  () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

exports.convertToCriteriaString = (criteria) => {    
    const criteriaString = Object.entries(criteria).map(([key, value]) => `(${key}:starts_with:${value})`).join(' and ');
    return `(${criteriaString})`;
}

exports.processValue = (value,column_type = "",column_name = "") => {
    if (value === null || value === undefined) {
        if(column_type == "longtext"){
            return JSON.stringify({name:"",id:""});
        }else
        if(column_type == "decimal" || column_type == "decimal(10,2)"){
            return 0.00;
        }else{
            return "";
        }
    }
    if (typeof value === "object") {
        value = JSON.stringify(value);
        value = value.replaceAll("'", "");
        return value;
    }
    if (typeof value === "string") {
        value = commonCleanString(value);
        return value.replaceAll("'", "");
    }
    if(column_name != "" && isSpecialColumn(column_name)){
        if(value){
            return 1; 
        } else 
        if(column_name == "currentStatus"){
            return 1; 
        } else {
            return 0; 
        }
        
    }
    return value;
};

exports.isObjectNullOrEmpty = (obj) => {
    return (
        obj === null ||
        obj === undefined ||
        (typeof obj === 'object' &&
            ((Array.isArray(obj) && obj.length === 0) || Object.keys(obj).length === 0)) ||
        (typeof obj === 'number' && obj === 0) ||
        (Array.isArray(obj) && obj.some(item => typeof item === 'object' && Object.keys(item).length > 0))
    );
}

exports.sendEmail = (emailOptions) => { 
    return new Promise(function (resolve, reject) {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_ENCRYPTION === 'tls', // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD
            }
        });
        const mailOptions = {
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: emailOptions.to,
            subject: emailOptions.subject,
            html: emailOptions.html
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Email send error:', error);
                reject({ emailSent: false });
            } else {
                console.log('Email sent:', info.response);
                resolve({ emailSent: true });
            }
        });
    });
};

exports.cleanString = (origText) => {
    let text = origText;

    // Single letters
    text = text.replace(/[∂άαáàâãªä]/gu, "a");
    text = text.replace(/[∆лДΛдАÁÀÂÃÄ]/gu, "A");
    text = text.replace(/[ЂЪЬБъь]/gu, "b");
    text = text.replace(/[βвВ]/gu, "B");
    text = text.replace(/[çς©с]/gu, "c");
    text = text.replace(/[ÇС]/gu, "C");
    text = text.replace(/[δ]/gu, "d");
    text = text.replace(/[éèêëέëèεе℮ёєэЭ]/gu, "e");
    text = text.replace(/[ÉÈÊË€ξЄ€Е∑]/gu, "E");
    text = text.replace(/[₣]/gu, "F");
    text = text.replace(/[НнЊњ]/gu, "H");
    text = text.replace(/[ђћЋ]/gu, "h");
    text = text.replace(/[ÍÌÎÏ]/gu, "I");
    text = text.replace(/[íìîïιίϊі]/gu, "i");
    text = text.replace(/[Јј]/gu, "j");
    text = text.replace(/[ΚЌК]/gu, "K");
    text = text.replace(/[ќк]/gu, "k");
    text = text.replace(/[ℓ∟]/gu, "l");
    text = text.replace(/[Мм]/gu, "M");
    text = text.replace(/[ñηήηπⁿ]/gu, "n");
    text = text.replace(/[Ñ∏пПИЙийΝЛ]/gu, "N");
    text = text.replace(/[óòôõºöοФσόо]/gu, "o");
    text = text.replace(/[ÓÒÔÕÖθΩθОΩ]/gu, "O");
    text = text.replace(/[ρφрРф]/gu, "p");
    text = text.replace(/[®яЯ]/gu, "R");
    text = text.replace(/[ГЃгѓ]/gu, "r");
    text = text.replace(/[Ѕ]/gu, "S");
    text = text.replace(/[ѕ]/gu, "s");
    text = text.replace(/[Тт]/gu, "T");
    text = text.replace(/[τ†‡]/gu, "t");
    text = text.replace(/[úùûüџμΰµυϋύ]/gu, "u");
    text = text.replace(/[√]/gu, "v");
    text = text.replace(/[ÚÙÛÜЏЦц]/gu, "U");
    text = text.replace(/[Ψψωώẅẃẁщш]/gu, "w");
    text = text.replace(/[ẀẄẂШЩ]/gu, "W");
    text = text.replace(/[ΧχЖХж]/gu, "x");
    text = text.replace(/[ỲΫ¥]/gu, "Y");
    text = text.replace(/[ỳγўЎУуч]/gu, "y");
    text = text.replace(/[ζ]/gu, "Z");

    // Punctuation
    text = text.replace(/[‚‚]/gu, ",");
    text = text.replace(/[`‛′’‘]/gu, "'");
    text = text.replace(/[″“”«»„]/gu, '"');
    text = text.replace(/[—–―−–‾⌐─↔→←]/gu, '-');
    text = text.replace(/[ ]/gu, ' ');

    text = text.replace("…", "...");
    text = text.replace("≠", "!=");
    text = text.replace("≤", "<=");
    text = text.replace("≥", ">=");
    text = text.replace(/[‗≈≡]/gu, "=");

    // Exciting combinations
    text = text.replace("ыЫ", "bl");
    text = text.replace("℅", "c/o");
    text = text.replace("₧", "Pts");
    text = text.replace("™", "tm");
    text = text.replace("№", "No");
    text = text.replace("Ч", "4");
    text = text.replace("‰", "%");
    text = text.replace(/[∙•]/gu, "*");
    text = text.replace("‹", "<");
    text = text.replace("›", ">");
    text = text.replace("‼", "!!");
    text = text.replace("⁄", "/");
    text = text.replace("∕", "/");
    text = text.replace("⅞", "7/8");
    text = text.replace("⅝", "5/8");
    text = text.replace("⅜", "3/8");
    text = text.replace("⅛", "1/8");
    text = text.replace(/[‰]/gu, "%");
    text = text.replace(/[Љљ]/gu, "Ab");
    text = text.replace(/[Юю]/gu, "IO");
    text = text.replace(/[ﬁﬂ]/gu, "fi");
    text = text.replace(/[зЗ]/gu, "3");
    text = text.replace("£", "(pounds)");
    text = text.replace("₤", "(lira)");
    text = text.replace(/[‰]/gu, "%");
    text = text.replace(/[↨↕↓↑│]/gu, "|");
    text = text.replace(/[∞∩∫⌂⌠⌡]/gu, "");
    // 2) Translation CP1252.
    const trans = {
        'f': '&fnof;',    // Latin Small Letter F With Hook
        '-': [
            '&hellip;', // Horizontal Ellipsis
            '&tilde;', // Small Tilde
            '&ndash;'       // Dash
        ],
        '+': '&dagger;',    // Dagger
        '#': '&Dagger;',    // Double Dagger
        'M': '&permil;',    // Per Mille Sign
        'S': '&Scaron;',    // Latin Capital Letter S With Caron
        'OE': '&OElig;',    // Latin Capital Ligature OE
        "'": [
            '&lsquo;', // Left Single Quotation Mark
            '&rsquo;', // Right Single Quotation Mark
            '&rsaquo;', // Single Right-Pointing Angle Quotation Mark
            '&sbquo;', // Single Low-9 Quotation Mark
            '&circ;', // Modifier Letter Circumflex Accent
            '&lsaquo;'  // Single Left-Pointing Angle Quotation Mark
        ],
        '"': [
            '&ldquo;', // Left Double Quotation Mark
            '&rdquo;', // Right Double Quotation Mark
            '&bdquo;', // Double Low-9 Quotation Mark
        ],
        '*': '&bull;',    // Bullet
        'n': '&ndash;',    // En Dash
        'm': '&mdash;',    // Em Dash
        'tm': '&trade;',    // Trade Mark Sign
        's': '&scaron;',    // Latin Small Letter S With Caron
        'oe': '&oelig;',    // Latin Small Ligature OE
        'Y': '&Yuml;',    // Latin Capital Letter Y With Diaeresis
        'euro': '&euro;'    // euro currency symbol
    };
    for (const k in trans) {
        if (Object.hasOwnProperty.call(trans, k)) {
            if (Array.isArray(trans[k])) {
                for (const v of trans[k]) {
                    text = text.replace(v, k);
                }
            } else {
                text = text.replace(trans[k], k);
            }
        }
    }
    // 3) remove <p>, <br/> ...
    text = text.replace(/<\/?[^>]+(>|$)/g, "");
    text = text.replace(/\s+/g, ' ').trim();
    // 4) &amp; => & &quot; => '
    const doc = new DOMParser().parseFromString(text, "text/html");
    if(doc.documentElement && doc.documentElement != null && doc.documentElement != "" ){
        text = doc.documentElement.textContent;
    }else{
        text = text;
    }
    return text;
}

const commonCleanString = (origText) => {
    let text = origText;

    // Single letters
    text = text.replace(/[∂άαáàâãªä]/gu, "a");
    text = text.replace(/[∆лДΛдАÁÀÂÃÄ]/gu, "A");
    text = text.replace(/[ЂЪЬБъь]/gu, "b");
    text = text.replace(/[βвВ]/gu, "B");
    text = text.replace(/[çς©с]/gu, "c");
    text = text.replace(/[ÇС]/gu, "C");
    text = text.replace(/[δ]/gu, "d");
    text = text.replace(/[éèêëέëèεе℮ёєэЭ]/gu, "e");
    text = text.replace(/[ÉÈÊË€ξЄ€Е∑]/gu, "E");
    text = text.replace(/[₣]/gu, "F");
    text = text.replace(/[НнЊњ]/gu, "H");
    text = text.replace(/[ђћЋ]/gu, "h");
    text = text.replace(/[ÍÌÎÏ]/gu, "I");
    text = text.replace(/[íìîïιίϊі]/gu, "i");
    text = text.replace(/[Јј]/gu, "j");
    text = text.replace(/[ΚЌК]/gu, "K");
    text = text.replace(/[ќк]/gu, "k");
    text = text.replace(/[ℓ∟]/gu, "l");
    text = text.replace(/[Мм]/gu, "M");
    text = text.replace(/[ñηήηπⁿ]/gu, "n");
    text = text.replace(/[Ñ∏пПИЙийΝЛ]/gu, "N");
    text = text.replace(/[óòôõºöοФσόо]/gu, "o");
    text = text.replace(/[ÓÒÔÕÖθΩθОΩ]/gu, "O");
    text = text.replace(/[ρφрРф]/gu, "p");
    text = text.replace(/[®яЯ]/gu, "R");
    text = text.replace(/[ГЃгѓ]/gu, "r");
    text = text.replace(/[Ѕ]/gu, "S");
    text = text.replace(/[ѕ]/gu, "s");
    text = text.replace(/[Тт]/gu, "T");
    text = text.replace(/[τ†‡]/gu, "t");
    text = text.replace(/[úùûüџμΰµυϋύ]/gu, "u");
    text = text.replace(/[√]/gu, "v");
    text = text.replace(/[ÚÙÛÜЏЦц]/gu, "U");
    text = text.replace(/[Ψψωώẅẃẁщш]/gu, "w");
    text = text.replace(/[ẀẄẂШЩ]/gu, "W");
    text = text.replace(/[ΧχЖХж]/gu, "x");
    text = text.replace(/[ỲΫ¥]/gu, "Y");
    text = text.replace(/[ỳγўЎУуч]/gu, "y");
    text = text.replace(/[ζ]/gu, "Z");

    // Punctuation
    text = text.replace(/[‚‚]/gu, ",");
    text = text.replace(/[`‛′’‘]/gu, "'");
    text = text.replace(/[″“”«»„]/gu, '"');
    text = text.replace(/[—–―−–‾⌐─↔→←]/gu, '-');
    text = text.replace(/[ ]/gu, ' ');

    text = text.replace("…", "...");
    text = text.replace("≠", "!=");
    text = text.replace("≤", "<=");
    text = text.replace("≥", ">=");
    text = text.replace(/[‗≈≡]/gu, "=");

    // Exciting combinations
    text = text.replace("ыЫ", "bl");
    text = text.replace("℅", "c/o");
    text = text.replace("₧", "Pts");
    text = text.replace("™", "tm");
    text = text.replace("№", "No");
    text = text.replace("Ч", "4");
    text = text.replace("‰", "%");
    text = text.replace(/[∙•]/gu, "*");
    text = text.replace("‹", "<");
    text = text.replace("›", ">");
    text = text.replace("‼", "!!");
    text = text.replace("⁄", "/");
    text = text.replace("∕", "/");
    text = text.replace("⅞", "7/8");
    text = text.replace("⅝", "5/8");
    text = text.replace("⅜", "3/8");
    text = text.replace("⅛", "1/8");
    text = text.replace(/[‰]/gu, "%");
    text = text.replace(/[Љљ]/gu, "Ab");
    text = text.replace(/[Юю]/gu, "IO");
    text = text.replace(/[ﬁﬂ]/gu, "fi");
    text = text.replace(/[зЗ]/gu, "3");
    text = text.replace("£", "(pounds)");
    text = text.replace("₤", "(lira)");
    text = text.replace(/[‰]/gu, "%");
    text = text.replace(/[↨↕↓↑│]/gu, "|");
    text = text.replace(/[∞∩∫⌂⌠⌡]/gu, "");

    // 2) Translation CP1252.
    const trans = {
        'f': '&fnof;',    // Latin Small Letter F With Hook
        '-': [
            '&hellip;', // Horizontal Ellipsis
            '&tilde;', // Small Tilde
            '&ndash;'       // Dash
        ],
        '+': '&dagger;',    // Dagger
        '#': '&Dagger;',    // Double Dagger
        'M': '&permil;',    // Per Mille Sign
        'S': '&Scaron;',    // Latin Capital Letter S With Caron
        'OE': '&OElig;',    // Latin Capital Ligature OE
        "'": [
            '&lsquo;', // Left Single Quotation Mark
            '&rsquo;', // Right Single Quotation Mark
            '&rsaquo;', // Single Right-Pointing Angle Quotation Mark
            '&sbquo;', // Single Low-9 Quotation Mark
            '&circ;', // Modifier Letter Circumflex Accent
            '&lsaquo;'  // Single Left-Pointing Angle Quotation Mark
        ],
        '"': [
            '&ldquo;', // Left Double Quotation Mark
            '&rdquo;', // Right Double Quotation Mark
            '&bdquo;', // Double Low-9 Quotation Mark
        ],
        '*': '&bull;',    // Bullet
        'n': '&ndash;',    // En Dash
        'm': '&mdash;',    // Em Dash
        'tm': '&trade;',    // Trade Mark Sign
        's': '&scaron;',    // Latin Small Letter S With Caron
        'oe': '&oelig;',    // Latin Small Ligature OE
        'Y': '&Yuml;',    // Latin Capital Letter Y With Diaeresis
        'euro': '&euro;'    // euro currency symbol
    };

    for (const k in trans) {
        if (Object.hasOwnProperty.call(trans, k)) {
            if (Array.isArray(trans[k])) {
                for (const v of trans[k]) {
                    text = text.replace(v, k);
                }
            } else {
                text = text.replace(trans[k], k);
            }
        }
    }

    // 3) remove <p>, <br/> ...
    text = text.replace(/<\/?[^>]+(>|$)/g, "");
    text = text.replace(/\s+/g, ' ').trim();
    // 4) &amp; => & &quot; => '
    const doc = new DOMParser().parseFromString(text, "text/html");
    if(doc && doc.documentElement && doc.documentElement != null && doc.documentElement != "" ){
        text = doc.documentElement.textContent;
    }else{
        text = text;
    }
    return text;
}

/**
 * Method to send email.
 * @param {*} emailOptions 
 
exports.sendEmail = (emailOptions) => {
    return new Promise(function (resolve, reject) {
        var mailOptions = {
            from: process.env.NODEMAILER_USER,
            to: emailOptions.to,
            subject: emailOptions.subject,
            html: emailOptions.html
        };
        let transporter = createTransport();
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Email send error', error);
                logger.error("Email send error", error);
                reject({ emailSent: false });
            } else {
                console.log('Email sent: ' + info.response);
                resolve({ emailSent: true });
            }
        });
    });
};

exports.createTransport = () => {
    return nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    });
};*/

/**
 * Method to prepare base server url based on development or production mode.
 
exports.prepareBaseUrl = () => {
    let backEndConfig = backEndServerConfig[process.env.NODE_ENV];
    let baseUrl = `${backEndConfig.protocol}://${backEndConfig.host}${backEndConfig.port ? ':' + backEndConfig.port : ''}`;
    return baseUrl;
};*/