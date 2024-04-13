const uniquenv = require('uniquenv');
const fs = require('fs');

const file = './resources/db.uniquenv';
const configFile = 'otpilot.json';

const config = (action) => {
    if (action === 'export') {
        const data = uniquenv.parse(file);

        if (!data) {
            return;
        }

        fs.writeFile(configFile, JSON.stringify(data, null, 3), (err) => {
            if (err) {
                throw err;
            }

            console.log(`Config file exported to ${ configFile }`);
        });
    } else {
        if (!fs.existsSync(configFile)) {
            console.error(`${ configFile } file not found`);

            return;
        }

        uniquenv.create(file, JSON.parse(fs.readFileSync(configFile)));
    }
};

module.exports = config;
