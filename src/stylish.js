import makeParse from './parsers.js'
import makeOrganize from './organizer.js'

const makeStylish = (filepath1, filepath2) => {
  const stringify = (value, replacer = ' ', spacesCount = 1) => {
    const iter = (currentValue, depth) => {
      if (typeof currentValue !== 'object') {
        return currentValue.toString();
      }
   
      const indentSize = depth * spacesCount;
      const currentIndent = replacer.repeat(indentSize);
      const bracketIndent = replacer.repeat(indentSize - spacesCount);
      const lines = Object
        .entries(currentValue)
        .map(([key, val]) => `${currentIndent}${key}: ${iter(val, depth + 1)}`);
   
      return [
        '{',
        ...lines,
        `${bracketIndent}}`,
      ].join('\n');
    };
   
    console.log (iter(value, 1));
  };
  stringify(makeParse(filepath1, filepath2))
}
export default makeStylish

