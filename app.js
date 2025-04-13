#!/usr/bin/env node

import { generator } from "./generator.js";
import { Command } from "commander";

const program = new Command();
program
    .name('passgen')
    .description('CLI program to generate random password.')
    .version('1.0.0')
    .option('-l, --pass-len <int>', 'Password length', '16')
    .option('-i, --include <char>', 'Character in password number <n>, symbols, uppercase <u> & lowercase <l> letter', 'nsul')
    .action(({ passLen, include }) => {
        console.log(generator(passLen, include.split('')));
    })

program.addHelpText('after', `

    Author: @sasa / Cyb3Rx 🧠
    
    Examples:
        passgen -l 24 -i sul      Generate 24-char password with symbols, uppercase & lowercase
    `);

program.parse()