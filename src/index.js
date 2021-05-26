import _ from 'lodash';
import readFile from './readFile.js';
import makeParse from './parsers.js'
import makeSylish from './stylish.js'

const getDifferences = (file1, file2) => {
  // преобразую файлы из стр в джсон
  const filepath1 = JSON.parse(readFile(file1));
  const filepath2 = JSON.parse(readFile(file2));

  makeSylish(filepath1, filepath2)

 };
export default getDifferences;
