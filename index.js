// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];

function superbowlWin(arr) {
  let results = arr.find((e) => e.result === "W");
  if (results) {
    return results.year;
  }
}

console.log(superbowlWin(record));
