const fs = require('fs');
const path = require('path');

const PACKAGE_DIRS = ['client', 'server'];

const getContent = function (name)
{
    return `{
    "internal": true,
    "typings": "index.d.ts",
    "main": "index.js",
    "module": "index.mjs",
    "sideEffects": false
}`;
};

for (const dir of PACKAGE_DIRS)
{
    fs.writeFileSync(path.join(__dirname, 'dist', dir, 'package.json'), getContent(dir));
}
