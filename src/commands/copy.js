const uniquenv = require('uniquenv');
const ncp = require('copy-paste');
const getOtpCode = require('../getOtpCode');

const file = './resources/db.uniquenv';

const copy = (commandName) => {
    const parsedData = uniquenv.parse(file);
    const command = parsedData.find(( data ) => data.name === commandName);

    if (!command) {
        console.error(`${ commandName } not found`);

        return;
    }

    if (!command.secret) {
        console.error('Secret key not found');

        return;
    }

    const otpCode = getOtpCode(command.secret);

    ncp.copy(otpCode, () => {
        console.log(`${ otpCode } copied to clipboard`);
    });
};

module.exports = copy;
