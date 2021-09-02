"use strict";
//? inheritance
// import { MatchReader } from "./inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";
Object.defineProperty(exports, "__esModule", { value: true });
// const reader = new MatchReader('football.csv');
// reader.read();
//? interface
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//? btw
// for interfaces you could also do some abstract inheritance like classes
// class Report implements SomeInterface {}
//* enum
//* fixed set of possibilities
// const MatchResult = {
//   HomeWin: 'H',
//   AwayWin: 'A',
//   Draw: 'D'
// }
// enum MatchResult {
//   HomeWin = "H",
//   AwayWin = "A",
//   Draw = "D",
// }
var manUnitedWins = 0;
//? inheritance 
// for (let match of reader.data) {
//? interface
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin)
        manUnitedWins++;
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin)
        manUnitedWins++;
}
console.log(manUnitedWins);
