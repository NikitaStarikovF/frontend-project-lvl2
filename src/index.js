import _ from 'lodash';
import readFile from './readFile.js';

const getDifferences = (file1, file2) => {
  const filepath1 = JSON.parse(readFile(file1));
  const filepath2 = JSON.parse(readFile(file2));
  const orderedFilepath1 = Object.keys(filepath1).sort().reduce(
    (obj, key) => {
      obj[key] = filepath1[key];
      return obj;
    }, {},
  );
  const orderedFilepath2 = Object.keys(filepath2).sort().reduce(
    (obj, key) => {
      obj[key] = filepath2[key];
      return obj;
    }, {},
  );
  const res = {};
  for (const [k1, v1] of Object.entries(orderedFilepath1)) {
    for (const [k2, v2] of Object.entries(orderedFilepath2)) {
      if (k1 === k2 && v1 === v2) {
        res['  ' + k1] = v1;
      }
      if (k1 === k2 && v1 !== v2) {
        res['- ' + k1] = v1;
        res['+ ' + k2] = v2;
      }
      if (!_.has(orderedFilepath2, k1)) {
        res['- ' + k1] = v1;
      }
    }
  }
  for (let [k2, v2] of Object.entries(orderedFilepath2)) {
    if (!_.has(orderedFilepath1, k2)) {
      res['+ ' + k2] = v2;
    }
  }
  const strRes = JSON.stringify(res).replace(/"/g, '').replace(/,/g, '' + '\n' + '  ');

  console.log('{' + '\n' + '  ' + strRes.slice(1, strRes.length - 1 ) + '\n' + '}');
};
export default getDifferences;
