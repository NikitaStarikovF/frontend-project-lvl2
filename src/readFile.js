import * as fs from 'fs';

function readFile(filename) {
  //console.log(fs.readFileSync(`${process.cwd()}/${filename}`, { encoding: 'utf8' }))
  return fs.readFileSync(`${process.cwd()}/${filename}`, { encoding: 'utf8' });
  //return '{    "host": "hexlet.io",    "timeout": 50,    "proxy": "123.234.53.22",    "follow": false  }'
}
//readFile('file3.json')
export default readFile;
