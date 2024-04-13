const uniquenv = require('uniquenv');
const { UNIQUENV_FILE } = require('../../enums/enums');

const del = (commandName) => {
    const parsedData = uniquenv.parse(UNIQUENV_FILE);

    const newData = parsedData.filter(( data ) => data.name !== commandName);

    if (parsedData.length === newData.length) {
        console.error(`${ commandName } not found`);

        return;
    }

    uniquenv.create(UNIQUENV_FILE, newData);

    console.log(`${ commandName } deleted`);
};

module.exports = del;
