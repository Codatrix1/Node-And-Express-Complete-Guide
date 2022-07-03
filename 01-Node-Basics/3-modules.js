// CommonJS - Every file in module(by default)
// Modules  - Encapsulated code (only share mimimun)

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternate-flavour");
require("./7-mind-grenade");

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
