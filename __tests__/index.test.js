import getDifferences from '../src/index.js';
import readFile from '../src/readFile.js';

test('getDifferences', () => {
  expect(getDifferences(
  'file1.json',
  'file2.json'
  )).toEqual(console.log('{' 
  + '\n' 
  + '  ' + '- a:1' 
  + '\n'
  + '  ' + '  b:2' 
  + '\n'
  + '  ' + '- c:3' 
  + '\n' 
  + '  ' + '- d:4' 
  + '\n'
  + '  ' + '+ d:5' 
  + '\n'
  + '  ' + '+ e:6' 
  + '\n'
  + '}'));
  
});
// NODE_OPTIONS=--experimental-vm-modules npx jest
