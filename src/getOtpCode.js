const speakeasy = require('speakeasy');

const getOtpCode = (secret) => speakeasy.totp({
    secret,
    encoding: 'base64'
});

module.exports = getOtpCode;
