import _ from 'lodash';
import readFile from './readFile.js';
import makeParse from './parsers.js'

const getDifferences = (file1, file2) => {
  // преобразую файлы из стр в джсон
  const filepath1 = JSON.parse(readFile(file1));
  const filepath2 = JSON.parse(readFile(file2));
  // console.log(`filepath1: ${JSON.stringify(filepath1)}`);
  // сортируем оба файла ab
  const orderedFilepath1 = (Object.keys(filepath1).sort().reduce(
    (obj, key) => {
      obj[key] = filepath1[key];
      return obj;
    }, {},
  ));
  
  const orderedFilepath2 = Object.keys(filepath2).sort().reduce(
    (obj, key) => {
      obj[key] = filepath2[key];
      return obj;
    }, {},
  );

  const strRes = JSON.stringify(makeParse(orderedFilepath1, orderedFilepath2)).replace(/"/g, ' ').replace(/,/g, '\n ');
  // output
  console.log(`{\n ${strRes.slice(1, strRes.length - 1)} \n}`);
};
export default getDifferences;
