# tiny (A tiny npm package to remove space from string)
# @manish_balyan/tiny
[![NPM](https://img.shields.io/npm/v/@manish_balyan/tiny.svg)](https://www.npmjs.com/package/@manish_balyan/tiny) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# install
```
npm i @manish_balyan/tiny
```

# Usage

```
const tiny = require("@manish_balyan/tiny");

tiny("string with space!");
//=> "stringwithspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
