import * as fs from 'fs';

const readFile = (filename) => {
  return fs.readFileSync(process.cwd() + "/"  + filename, {encoding:'utf8'});
};

export default readFile
