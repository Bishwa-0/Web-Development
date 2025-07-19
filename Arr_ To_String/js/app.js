const myColor = ["Red", "Green", "White", "Black"];
document.getElementById("panel1").innerHTML = `
  <h2>Join Array Elements</h2>
  <p>${myColor.join(',')}</p>
  <p>${myColor.join('+')}</p>
`;

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freq = {}, max = 0, most = '';
arr1.forEach(val => {
  freq[val] = (freq[val] || 0) + 1;
  if (freq[val] > max) {
    max = freq[val];
    most = val;
  }
});
document.getElementById("panel2").innerHTML = `
  <h2>Most Frequent Element</h2>
  <p>${most} (${max} times)</p>
`;

function truncateString(str, num) {
  return str.slice(0, num);
}
document.getElementById("panel3").innerHTML = `
  <h2>Truncate String</h2>
  <p>${truncateString("Robin Singh", 4)}</p>
`;

function capitalizeWords(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
document.getElementById("panel4").innerHTML = `
  <h2>Capitalize Words</h2>
  <p>${capitalizeWords("js string exercises")}</p>
`;

function arrBetween(low, high, arr) {
  return arr.filter(n => n > low && n < high);
}
document.getElementById("panel5").innerHTML = `
  <h2>Filter Between 3 and 8</h2>
  <p>[1, 5, 95, 0, 4, 7] ➞ ${arrBetween(3, 8, [1, 5, 95, 0, 4, 7])}</p>
`;

document.getElementById("panel6").innerHTML = `
  <h2>Filter Between 1 and 10</h2>
  <p>[1, 10, 25, 8, 11, 6] ➞ ${arrBetween(1, 10, [1, 10, 25, 8, 11, 6])}</p>
`;

document.getElementById("panel7").innerHTML = `
  <h2>Filter Between 7 and 32</h2>
  <p>[1, 2, 3, 78] ➞ ${arrBetween(7, 32, [1, 2, 3, 78])}</p>
`;

function findIndex(arr, val) {
  return arr.indexOf(val);
}
document.getElementById("panel8").innerHTML = `
  <h2>Find Index Examples</h2>
  <p>["hi", "edabit", "fgh", "abc"] → ${findIndex(["hi", "edabit", "fgh", "abc"], "fgh")}</p>
  <p>["Red", "blue", "Blue", "Green"] → ${findIndex(["Red", "blue", "Blue", "Green"], "blue")}</p>
  <p>["a", "g", "y", "d"] → ${findIndex(["a", "g", "y", "d"], "d")}</p>
  <p>["Pineapple", "Orange", "Grape", "Apple"] → ${findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")}</p>
`;
