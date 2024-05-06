const uniquenv = require('uniquenv');
const getOtpCode = require('../getOtpCode');
const copyToClipboard = require('../copyToClipboard');
const { UNIQUENV_FILE } = require('../../enums/enums');

const copy = (commandName) => {
    const parsedData = uniquenv.parse(UNIQUENV_FILE) ?? [];
    const command = parsedData.find((data) => data.name === commandName);

    if (!command) {
        console.error(`${ commandName } not found`);

        return;
    }

    if (!command.secret) {
        console.error('Secret key not found');

        return;
    }

    const otpCode = getOtpCode(command.secret);

    copyToClipboard(otpCode);
};

module.exports = copy;
