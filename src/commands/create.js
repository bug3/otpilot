const uniquenv = require('uniquenv');
const fs = require('fs');
const getOtpCode  = require('../getOtpCode');
const execCommand = require('../execCommand');

const file = './resources/db.uniquenv';

const create = (commandName) => {
    const command = uniquenv.input('Command: ');

    const data = {
        name: commandName,
        secret: command.includes('$otp') ? uniquenv.password('OTP Secret: ') : '',
        cmd: command
    };

    execCommand(data.cmd.replace('$otp', getOtpCode(data.secret)));

    if (!fs.existsSync(file)) {
        uniquenv.create(file, [data]);
    } else {
        let parsedData = uniquenv.parse(file);

        if (parsedData.find((item) => item.name === commandName)) {
            parsedData = parsedData.map((item) => {
                if (item.name === commandName) {
                    return data;
                }

                return item;
            });
        } else {
            parsedData.push(data);
        }

        uniquenv.create(file, parsedData);
    }

    console.log(`${ commandName } created`);
};

module.exports = create;
