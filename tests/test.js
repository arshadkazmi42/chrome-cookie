const { expect } = require('chai');

const CookieCrud = require('../index');
const Cookie = new CookieCrud(__dirname + '/cookies.db');

const DATA = [
  {
    'creation_utc': 'now',
    'encrypted_value': '{"type": "Buffer", "data": [101,110,99,50]}',
    'expires_utc': 'never',
    'has_expires': 'yes',
    'host_key': 'arshad.com',
    'is_httponly': 'yes',
    'is_persistent': 'no',
    'is_secure': 'yes',
    'last_access_utc': 'now',
    'name': 'arshad',
    'path': '/root',
    'priority': 'no',
    'value': 'kazmi',
  }
];

const INSERTED = [
  {
    'creation_utc': 'now',
    'encrypted_value': '{"type":"Buffer","data":[101,110,99,50]}',
    'expires_utc': 'never',    
    'has_expires': 'yes',
    'host_key': 'arshad.com',
    'is_httponly': 'yes',
    'is_persistent': 'no',
    'is_secure': 'yes',
    'last_access_utc': 'now',
    'name': 'arshad',
    'path': '/root',
    'priority': 'no',
    'value': 'kazmi',
    'samesite': -1
  }
];

describe('chrome cookie get and set operations', () => {
  it('should add new row in the database', async () => {
    await Cookie.setCookie(DATA);
    let rows = await Cookie.getCookie('arshad.com');
    expect(rows.length).to.equal(1);
    expect(rows).to.deep.equal(INSERTED);
    await Cookie.removeCookie('arshad.com');
    rows = await Cookie.getCookie('arshad.com');
    expect(rows.length).to.equal(0);
  });
});
