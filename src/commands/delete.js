const uniquenv = require('uniquenv');

const file = './resources/db.uniquenv';

const del = (commandName) => {
    const parsedData = uniquenv.parse(file);

    const newData = parsedData.filter(( data ) => data.name !== commandName);

    if (parsedData.length === newData.length) {
        console.error(`${ commandName } not found`);

        return;
    }

    uniquenv.create(file, newData);

    console.log(`${ commandName } deleted`);
};

module.exports = del;
