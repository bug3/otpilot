const uniquenv = require('uniquenv');
const { exec } = require('child_process');

const file = './resources/db.uniquenv';

const run = (commandName) => {
    console.log(commandName);

    const parsedData = uniquenv.parse(file);
    const command = parsedData.find(( data ) => data.name === commandName);

    if (!command) {
        console.error(`${ commandName } not found`);

        return;
    }

    exec(command.cmd, (error, stdout, stderr) => {
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
