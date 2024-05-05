const CryptoJS = require('crypto-js');

const decrypt = (data, password) => {
    const decryptedData = CryptoJS.AES.decrypt(data, password).toString(CryptoJS.enc.Utf8);

    if (!decryptedData) {
        console.error('Failed to parse file');

        return;
    }

    return JSON.parse(decryptedData);
};

module.exports = decrypt;
