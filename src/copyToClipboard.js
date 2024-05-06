const sp = require('synchronized-promise');

const importClipboardy = sp(async () => {
    const module = await import('clipboardy');

    return module.default;
});

const clipboardy = importClipboardy();

const copyToClipboard = (text) => {
    clipboardy.writeSync(text);

    console.log(`${ clipboardy.readSync() } copied to clipboard`);
};

module.exports = copyToClipboard;
