#!/usr/bin/env node

const { Command, Argument } = require('commander');
const list = require('../src/commands/list');
const create = require('../src/commands/create');
const del = require('../src/commands/delete');
const run = require('../src/commands/run');
const copy = require('../src/commands/copy');
const config = require('../src/commands/config');

const cli = new Command();

const main = () => {
    cli.name('otpilot').description('Automate OTP Codes').version('0.0.0');

    cli.command('list').description('list commands').action(list);

    cli.command('create').description('create new command').argument('<command-name>', 'command name').action(create);

    cli.command('delete').description('delete command').argument('<command-name>', 'command name').action(del);

    cli.command('run').description('run command').argument('<command-name>', 'command name').action(run);

    cli.command('copy').description('copy otp').argument('<command-name>', 'command name').action(copy);

    cli.command('config')
        .description('import or export config file')
        .addArgument(
            new Argument('<action>', 'import or export')
                .choices(['import', 'export'])
        ).action(config);

    cli.parse();
};

main();
