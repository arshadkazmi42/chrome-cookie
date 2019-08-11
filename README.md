# chrome-cookie

[![Build Status](https://img.shields.io/badge/build-passing-success.svg)](https://img.shields.io/badge/build-passing-success.svg)

Node Cookie Manager for Chrome, read / write cookie from sqlite db

## Install

```
npm i chrome-cookie
```

## Usage

```javascript

const ChromeCookie = require('chrome-cookie');

// Reading cookie
const cookie = await new ChromeCookie().getCookie('https://github.com');

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

await ChromeCookie.setCookie(DATA);
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

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/chrome-cookie/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
