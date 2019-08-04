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

const cookie = ChromeCookie.get('https://github.com');
console.log(cookie);

```

