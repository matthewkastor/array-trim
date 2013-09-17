# array-trim

Removes undefined, null, and empty strings from arrays.

## Installation

```
npm install array-trim
```

## Usage

In node:

```
var arrayTrim = require('array-trim');
console.log(array-trim(['s', '', 'd'])); // logs ['s','d']
```

In the browser, include `./browser/array-trim_web.js` in your page. `arrayTrim` will
 be available in your page.
