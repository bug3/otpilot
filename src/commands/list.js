const uniquenv = require('uniquenv');
const { UNIQUENV_FILE } = require('../../enums/enums');

const list = () => {
    const parsedData = uniquenv.parse(UNIQUENV_FILE) ?? [];

    console.log(parsedData.map((data) => {
        const commandData = {
            name: data.name,
            cmd: data.cmd,
        };

        if (data.secret) {
            commandData.secret = '*'.repeat(data.secret.length);
        }

        return commandData;
    }));
};

module.exports = list;
