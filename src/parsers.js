import _ from 'lodash';

const makeParse = (orderedFilepath1, orderedFilepath2) => {
  const res = {};
  for (const [keyFilepath1, valueFilepath1] of Object.entries(orderedFilepath1)) {
    for (const [keyFilepath2, valueFilepath2] of Object.entries(orderedFilepath2)) {
      if (keyFilepath1 === keyFilepath2 && valueFilepath1 === valueFilepath2) {
        res['  ' + keyFilepath1] = valueFilepath1;
      }
      if (keyFilepath1 === keyFilepath2 && valueFilepath1 !== valueFilepath2) {
        res['- ' + keyFilepath1] = valueFilepath1;
        res['+ ' + keyFilepath2] = valueFilepath2;
      }
      if (!_.has(orderedFilepath2, keyFilepath1)) {
        res['- ' + keyFilepath1] = valueFilepath1;
      }
    }
  }
  for (let [keyFilepath2, valueFilepath2] of Object.entries(orderedFilepath2)) {
    if (!_.has(orderedFilepath1, keyFilepath2)) {
      res['+ ' + keyFilepath2] = valueFilepath2;
    }
  }
  return res;
}
export default makeParse