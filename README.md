# chrome-cookie

[![Build](https://github.com/arshadkazmi42/chrome-cookie/actions/workflows/nodejs.yml/badge.svg)](https://github.com/arshadkazmi42/chrome-cookie/actions/workflows/nodejs.yml)
[![NPM Version](https://img.shields.io/npm/v/chrome-cookie.svg)](https://www.npmjs.com/package/chrome-cookie)
[![NPM Downloads](https://img.shields.io/npm/dt/chrome-cookie.svg)](https://www.npmjs.com/package/chrome-cookie)
[![Github Repo Size](https://img.shields.io/github/repo-size/arshadkazmi42/chrome-cookie.svg)](https://github.com/arshadkazmi42/chrome-cookie)
[![LICENSE](https://img.shields.io/npm/l/chrome-cookie.svg)](https://github.com/arshadkazmi42/chrome-cookie/blob/master/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/chrome-cookie.svg)](https://github.com/arshadkazmi42/chrome-cookie/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/chrome-cookie.svg)](https://github.com/arshadkazmi42/chrome-cookie/commits/master)

Node Cookie Manager for Chrome, read / write cookie from sqlite db

## Install

```
npm i chrome-cookie
```

## Usage

```javascript

const ChromeCookie = require('chrome-cookie');
const CCookie = new ChromeCookie();

// Reading cookie
const cookie = await CCookie.getCookie('arshad.com');

// Inserting cookie
const DATA = [
  {
    'creation_utc': 'now',
    'encrypted_value': 'enc2',
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

await CCookie.setCookie(DATA);
```

## API

- **`getCookie(path)`**
  - Returns cookie json from database for the input path
    - **Params**
      - path (String)

- **`setCookie(cookies)`**
  - Adds all the input cookies into the sqlite database
    - **Params**
      - cookies (Array of cookies object)

- **`removeCookie(domain)`**
  - Removes all records matching the domain.
  - > It uses `like` condition (`%domain%`) so anything matching the pattern will be removed
    - **Params**
      - path (String)

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/chrome-cookie/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase
