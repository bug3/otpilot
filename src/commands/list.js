const uniquenv = require('uniquenv');

const file = './resources/db.uniquenv';

const del = () => {
    const parsedData = uniquenv.parse(file);

    console.log(parsedData.map(( data ) => {
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

module.exports = del;
