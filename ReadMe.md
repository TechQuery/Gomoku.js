# Gomoku.js

**Algorithm of Nth order Gomoku in OOP**

[![NPM Dependency](https://david-dm.org/TechQuery/Gomoku.js.svg)](https://david-dm.org/TechQuery/Gomoku.js)

[![NPM](https://nodei.co/npm/gomoku-js.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gomoku-js/)



## Examples of usage

Classic **Five in a row** game:

```JavaScript
const Gomoku = require('gomoku-js');

var game = new Gomoku( 5 );

game.setChessOf(0, 0, 0);

game.setChessOf(1, 0, 1);

//  ...
//
//  It will return the index of winner

game.setChessOf(0, 0, 4);
```


## Similar works

https://github.com/search?l=JavaScript&o=desc&q=Gomoku&s=stars&type=Repositories&utf8=%E2%9C%93
