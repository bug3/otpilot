const uniquenv = require('uniquenv');
const fs = require('fs');
const { UNIQUENV_FILE, CONFIG_FILE } = require('../../enums/enums');
const encrypt = require('../encrypt');
const decrypt = require('../decrypt');

const config = (action) => {
    const password = uniquenv.password('Enter config file password: ');

    if (action === 'export') {
        const data = uniquenv.parse(UNIQUENV_FILE);

        if (!data) {
            return;
        }

        fs.writeFile(CONFIG_FILE, encrypt(data, password), (err) => {
            if (err) {
                throw err;
            }

            console.log(`Config file exported to ${ CONFIG_FILE }`);
        });
    } else {
        if (!fs.existsSync(CONFIG_FILE)) {
            console.error(`${ CONFIG_FILE } file not found`);

            return;
        }

        uniquenv.create(UNIQUENV_FILE, decrypt(fs.readFileSync(CONFIG_FILE), password));
    }
};

module.exports = config;
