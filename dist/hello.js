"use strict";

var _function = require("./function");

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = "chinan JS";

console.log((0, _function.sayHi)(name));

var batmanUrl = 'http://www.omdbapi.com/?t=Batman&y=&plot=short&r=json';
var promise = _axios2.default.get(batmanUrl);
promise.then(function (response) {
    console.log('GET response:', response.data);
});