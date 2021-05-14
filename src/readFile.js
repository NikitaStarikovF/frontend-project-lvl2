import * as fs from 'fs';

function readFile(filename) {
  //console.log(fs.readFileSync(`${process.cwd()}/${filename}`, { encoding: 'utf8' }))
  return fs.readFileSync(`${process.cwd()}/${filename}`, { encoding: 'utf8' });
  }
//readFile('file1.yml')
export default readFile;
