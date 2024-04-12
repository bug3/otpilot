const uniquenv = require('uniquenv');
const fs = require('fs');

const file = './resources/db.uniquenv';

const create = (commandName) => {
    const command = uniquenv.input('Command: ');

    const data = {
        name: commandName,
        secret: command.includes('$otp') ? uniquenv.password('OTP Secret: ') : '',
        cmd: command
    };

    if (!fs.existsSync(file)) {
        uniquenv.create(file, [data]);
    } else {
        const parsedData = uniquenv.parse(file);

        parsedData.push(data);

        uniquenv.create(file, parsedData);
    }
};

module.exports = create;
