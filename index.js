const SQLiteCrud = require('sqlite3-promisify');
const { ValuesPointer, SelectFields, QueryValues } = require('genql');

const { ChromeCookiePath, Util } = require('./lib');


function Chrome() {
  this.tableName = 'cookies';
  this.cookies = require('./cookie.json');
  this.fields =  SelectFields.get(this.cookies);
  this.sqliteCrud = new SQLiteCrud(ChromeCookiePath.get());
}


Chrome.prototype.setCookie = async function(cookies) {
  const columnsCount = this.cookies.columns.length;
  const insertQuery = `INSERT INTO ${this.tableName} (${this.fields.join(', ')}) VALUES (${ValuesPointer.get(columnsCount)})`;

  const queries = []
  for (let cookie of cookies) {
    const values = QueryValues.get(this.cookies, cookie);
    queries.push(this.sqliteCrud.run(insertQuery, values));
  }

  return await Promise.all(queries);
}


Chrome.prototype.getCookie = async function(domain) {
  const query = `SELECT * from ${this.tableName} WHERE host_key like '%${domain}%'`;
  return Util.parse(this.cookies, await this.sqliteCrud.all(query));
}


module.exports = Chrome;
