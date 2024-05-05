const CryptoJS = require('crypto-js');

const encrypt = (data, password) => {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), password).toString();

    return Buffer.alloc(ciphertext.length, ciphertext, 'utf8');
};

module.exports = encrypt;
