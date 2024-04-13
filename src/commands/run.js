const uniquenv = require('uniquenv');
const getOtpCode = require('../getOtpCode');
const execCommand = require('../execCommand');
const { UNIQUENV_FILE } = require('../../enums/enums');

const run = (commandName) => {
    const parsedData = uniquenv.parse(UNIQUENV_FILE);
    const command = parsedData.find((data) => data.name === commandName);

    if (!command) {
        console.error(`${ commandName } not found`);

        return;
    }

    execCommand(command.cmd.replace('$otp', getOtpCode(command.secret)));
};

module.exports = run;
