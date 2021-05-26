import _ from 'lodash';
import makeOrganize from './organizer.js'

  const makeParse = (orderedFilepath1, orderedFilepath2) => {
    //console.log('!!!!')
    let res = {};

  orderedFilepath1 = makeOrganize(orderedFilepath1);
  orderedFilepath2 = makeOrganize(orderedFilepath2);
  for (const [keyFilepath1, valueFilepath1] of Object.entries(orderedFilepath1)) {
    for (const [keyFilepath2, valueFilepath2] of Object.entries(orderedFilepath2)) {
     // console.log('keyFilepath1 :' + keyFilepath1)
     // console.log('keyFilepath2 :' + keyFilepath2)

      // add SPACE
      if (keyFilepath1 === keyFilepath2 && 
        (typeof(valueFilepath1) === 'object' && typeof(valueFilepath2) === 'object')) 
        {
        res['  ' + keyFilepath1] = makeParse(valueFilepath1, valueFilepath2 );
        }
      if (((keyFilepath1 === keyFilepath2) && (valueFilepath1 === valueFilepath2))
      && (typeof(valueFilepath1) !== 'object' && typeof(valueFilepath2) !== 'object') ) 
        {
        res['  ' + keyFilepath1] = valueFilepath1;
        }

       // + & -
        if (!_.has(orderedFilepath2, keyFilepath1)) {
                  res['- ' + keyFilepath1] = valueFilepath1;
                }
        if ((keyFilepath1 === keyFilepath2 && valueFilepath1 !== valueFilepath2)
        && (typeof(valueFilepath1) !== 'object' && typeof(valueFilepath2) !== 'object')) {
          res['- ' + keyFilepath1] = valueFilepath1;
          res['+ ' + keyFilepath2] = valueFilepath2;
        }

        for (let [keyFilepath2, valueFilepath2] of Object.entries(orderedFilepath2)) {
          if (!_.has(orderedFilepath1, keyFilepath2)
          && (typeof(valueFilepath1) !== 'object' && typeof(valueFilepath2) !== 'object')) {
            res['+ ' + keyFilepath2] = valueFilepath2;

 
              }
              return res;
};
//makeParse();
export default makeParse
