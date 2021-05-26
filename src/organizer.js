
const makeOraganize = (object) => {
  //console.log('organaizer :' + JSON.stringify(object))
  return (Object.keys(object).sort().reduce(
    (obj, key) => {
      obj[key] = object[key];
      return obj;
    }, {},
  ));
}
console.log( makeOraganize ({
  "setting21": 200,
  "setting1": "Value 1",
  "setting2": 200,
  "setting3": true,
  "setting6": {
    "key": "value",
    "doge": {
      "wow": ""
    }
  }
}))
export default makeOraganize