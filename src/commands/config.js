const uniquenv = require('uniquenv');
const fs = require('fs');
const { UNIQUENV_FILE, CONFIG_FILE } = require('../../enums/enums');

const config = (action) => {
    if (action === 'export') {
        const data = uniquenv.parse(UNIQUENV_FILE);

        if (!data) {
            return;
        }

        fs.writeFile(CONFIG_FILE, JSON.stringify(data, null, 3), (err) => {
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

        uniquenv.create(UNIQUENV_FILE, JSON.parse(fs.readFileSync(CONFIG_FILE)));
    }
};

module.exports = config;
