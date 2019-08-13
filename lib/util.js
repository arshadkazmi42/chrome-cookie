const _ = require('lodash');

const CONSTANTS = require('./constants');


const parse = (model, resultData) => {  
  
  const { KEY_JSON, KEY_BLOB } = CONSTANTS['PARSE'];

  const resData = [];
  for (let data of resultData) {
    const res = {};
    for (let column of model.columns) {
      const key = column.name;
      res[key] = _.get(data, key);
      if ((column.type === KEY_JSON || column.type == KEY_BLOB) && res[key]) {
        res[key] = JSON.stringify(res[key]);
      }
    }

    resData.push(res);
  }

  return resData;
};


module.exports = {
  parse
};
