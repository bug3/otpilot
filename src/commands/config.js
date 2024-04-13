const uniquenv = require('uniquenv');
const fs = require('fs');
const { UNIQUENV_FILE } = require('../../enums/enums');

const configFile = 'otpilot.json';

const config = (action) => {
    if (action === 'export') {
        const data = uniquenv.parse(UNIQUENV_FILE);

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

        uniquenv.create(UNIQUENV_FILE, JSON.parse(fs.readFileSync(configFile)));
    }
};

module.exports = config;
