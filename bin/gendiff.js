#!/usr/bin/env node
const { Command } = require('commander'); 
const program = new Command();


program
  .version('0.0')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.', /* {
    format: 'format',
    type: 'type'
  } */)
  .option('-f, --format [type]', 'output format');

program.parse();
