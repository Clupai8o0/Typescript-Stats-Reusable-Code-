//? inheritance
// import { MatchReader } from "./inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";

// const reader = new MatchReader('football.csv');
// reader.read();

//? interface
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from "./MatchResult";

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
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

let manUnitedWins = 0;

//? inheritance 
// for (let match of reader.data) {

//? interface
for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin)
    manUnitedWins++;
  else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin)
    manUnitedWins++;
}

console.log(manUnitedWins);
