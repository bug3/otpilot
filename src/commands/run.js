const uniquenv = require('uniquenv');
const getOtpCode  = require('../getOtpCode');
const { exec } = require('child_process');

const file = './resources/db.uniquenv';

const run = (commandName) => {
    const parsedData = uniquenv.parse(file);
    const command = parsedData.find(( data ) => data.name === commandName);

    if (!command) {
        console.error(`${ commandName } not found`);

        return;
    }

    exec(command.cmd.replace('$otp', getOtpCode(command.secret)), (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${ error.message }`);

            return;
        }

        if (stderr) {
            console.error(`stderr: ${ stderr }`);

            return;
        }

        console.log(stdout);
    });
};

module.exports = run;
