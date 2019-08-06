const _ = require('lodash');


const parse = (model, resultData) => {
  const resData = [];
  for (let data of resultData) {
    const res = {};
    for (let column of model.columns) {
      const key = column.name;
      res[key] = _.get(data, key);
      if ((column.type === 'json' || column.type == 'blob') && res[key]) {
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
