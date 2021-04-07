import _ from "lodash";
import readFile from './read.js';

const getDifferences = (filepath1, filepath2) => {
  filepath1 = JSON.parse(readFile(filepath1));
  filepath2 = JSON.parse(readFile(filepath2));
   const orderedFilepath1 = Object.keys(filepath1).sort().reduce(
  (obj, key) => { 
    obj[key] = filepath1[key]; 
    return obj;
  }, 
  {}
);
const orderedFilepath2 = Object.keys(filepath2).sort().reduce(
  (obj, key) => { 
    obj[key] = filepath2[key]; 
    return obj;
  }, 
  {}
);
let res = {};
for (let [k1, v1] of Object.entries(orderedFilepath1)) {
  for (let [k2, v2] of Object.entries(orderedFilepath2)) {
    if (k1 === k2 && v1 === v2) {
     res['  ' + k1] = v1;
    }
    if (k1 === k2 && v1 != v2) {
     res['- ' + k1] = v1;
     res['+ ' + k2] = v2;
   }
    if (!_.has(orderedFilepath2, k1)) {
    res['- ' + k1] = v1;
   }
  }
}
  for (let [k2, v2] of Object.entries(orderedFilepath2)) {
    for (let [k1, v1] of Object.entries(orderedFilepath1)) {
      if (!_.has(orderedFilepath1, k2)) {
        res['+ ' + k2] = v2;
       }      
      }
}
let strRes = JSON.stringify(res).replace(/"/g, '').replace(/,/g, '' + '\n' + '  ');

 console.log('{' + '\n' + '  ' + strRes.slice(1, strRes.length - 1 ) + '\n' + '}');

};
export default getDifferences


