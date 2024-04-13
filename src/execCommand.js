const { exec } = require('child_process');

const execCommand = (command) => {
    exec(command, (error, stdout, stderr) => {
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

module.exports = execCommand;
