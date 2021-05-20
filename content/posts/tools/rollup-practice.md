---
slug: "/blog/tools/rollup-practice"
date: "2020-03-12"
title: "Rollup for Library Bundle in practice"
topic: "Tools"
---

When I write JavaScripts in different projects, there is always a situation that many modules have same requirement to call same function, or need excute same process. Thus seal those common functions and then publish them as a package will save me a lot of time.

In order to achieve the goal, I need a tool to handle bundling task, transpile into ES6 module or commonjs module, then it is the time to let Rollup.js help.

Rollup is a very convenient tool to compile small pieces of code into larger module. It uses standardized format for code modules, and can be easily configed to make code into ES6 Modules, CommonJS, or IIEF. Also, compared with Webpack, Rollup configure can be easier, and simpler, thus I believe it very good at library development.

Similar to Webpack, Rollup needs an entry to start with. So it is better to organize project directory structure at first. In my case, I organized them like below:

```
my-module
  |-lib  #bundle destination
  |-src #source code directory
    |-index.js #entry
  |-rollup.config.js #rollup config file
  |-package.json
```

The `src/index.js` is the entry where we can put all functions into. For example, I need a function that I can check a telephone number whether it is in a valid format in several area. Then I wrote is:

```js
// src/index.js
const PHONE_REGX = {
    "en-US": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    "en-CA": /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    "en-HK": /^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,
    "zh-CN": /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,
    "zh-TW": /^(\+?886\-?|0)?9\d{8}$/,
};

export function isValidPhone(tel, locale = "en-CA") {
    const phone = `${tel}`;
    if (!phone || phone.length < 1 || !locale || !PHONE_REGX[locale]) {
        return false;
    }

    return PHONE_REGX[locale].test(phone);
}
```

Now I have the ingredient, and it is the time to set up `rollup.config.js` to help me cook the package course. Before the configuration, we need to install dependencies. So:

```shell
npm install --save-dev rollup
```

After installed rollup, we can write the configuration base in the `rollup.config.js`

```javascript
const path = require("path");

export default {
    input: path.resolve(__dirname, "src/index.js"),
    output: {
        file: "bundle.js",
        format: "esm",
    },
};
```

Above is the starter of rollup configuration. Basically, rollup need us to declare what is the input entry file and where to output the transpiled file. `output.formt` is the output module format which can be `cjs` for `commonjs`, `esm` for `ESmodule`, or `iife` for browser self-executing function.

Technically, this rollup is ready to use with the minimum configuration. However, we still need tools like babel to transpile source JavaScripts code to make the module compatible with most of the browser environment. So, this is where plugins come out to help.

install babel dependencies:

```shell
npm i --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

install babel plugin for rollup.js:

```shell
npm i --save-dev @rollup/plugin-babel
```

Then we need to update `rollup.config.js`

```javascript
const path = require("path");
import babel from '@rollup/plugin-babel';

const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

export default {
    input: path.resolve(__dirname, "src/index.js"),
    output: {
        file: "bundle.js",
        format: "esm",
    },
    babel({
      babelHelpers: 'runtime',
      extensions: EXTENSIONS,
      include: ['src/**'],
      exclude: ['node_modules/**'],
    }),
};
```
