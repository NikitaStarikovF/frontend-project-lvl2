#!/usr/bin/env node
import command from 'commander';
import getDifferences from '../src/index.js';
//import file from '../src/read.js';

const { Command } = command;
const program = new Command();


program
  .version('0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
/*   .action((filepath1, filepath2) => {
    filepath1 = file;
    filepath2 = {
     "timeout": 20,
     "verbose": true,
     "host": "hexlet.io"
   }
     console.log(filepath1);
   }); */
  .action((filepath1, filepath2) => {
     /* filepath1 = file;
     filepath2 = {
      "timeout": 20,
      "verbose": true,
      "host": "hexlet.io"
    } */
      getDifferences(filepath1, filepath2);
    });
program.parse();
