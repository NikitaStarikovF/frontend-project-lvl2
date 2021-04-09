import * as fs from 'fs';

function readFile(filename) {
  return fs.readFileSync(`${process.cwd()}/${filename}`, { encoding: 'utf8' });
}

export default readFile;
