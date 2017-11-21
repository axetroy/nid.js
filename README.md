## Struct

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/nid.js.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/axetroy/nid.js.svg?branch=master)](https://travis-ci.org/axetroy/nid.js)
[![Coverage Status](https://coveralls.io/repos/github/axetroy/nid.js/badge.svg?branch=master)](https://coveralls.io/github/axetroy/nid.js?branch=master)
[![Dependency](https://david-dm.org/axetroy/nid.svg)](https://david-dm.org/axetroy/nid)
![License](https://img.shields.io/badge/license-Apache-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/%40axetroy%2Fstruct.svg)](https://badge.fury.io/js/%40axetroy%2Fstruct)
![Size](https://github-size-badge.herokuapp.com/axetroy/nid.js.svg)

A Modern, Scalable , Graceful, Easy Use data structure validator

## Usage

```npm
npm install @axetroy/nid
```

```javascript
const Nid = require('@axetroy/nid');

const nid = Nid(8);

console.log(+nid);        // ouput as a number
console.log('' + nid);    // ouput as a string

// print all element
console.log(nid[0])
console.log(nid[1])
console.log(nid[2])
console.log(nid[3])
console.log(nid[4])
console.log(nid[5])
console.log(nid[6])
console.log(nid[7])

// generate as a raw string, API like golang
console.log(Nid.New(8));
```

## Contributing

[Contributing Guid](https://github.com/axetroy/nid.js/blob/master/CONTRIBUTING.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroy/nid.js/commits?author=axetroy) [🐛](https://github.com/axetroy/nid.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faxetroy%2Fnid.js.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Faxetroy%2Fnid.js?ref=badge_large)
