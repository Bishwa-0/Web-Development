
const myColor = ["Red", "Green", "White", "Black"];
const join1 = myColor.join(",");
const join2 = myColor.toString();
const join3 = myColor.join("+");

document.getElementById("joinOutput").innerHTML = `
  "${join1}"<br>
  "${join2}"<br>
  "${join3}"
`;

const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let freqMap = {};
let maxFreq = 0;
let mostFreq = null;

for (let val of arr1) {
  freqMap[val] = (freqMap[val] || 0) + 1;
  if (freqMap[val] > maxFreq) {
    maxFreq = freqMap[val];
    mostFreq = val;
  }
}

document.getElementById("freqOutput").innerText = `${mostFreq} (${maxFreq} times)`;


function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) : str;
}

document.getElementById("truncateOutput").innerText = truncateString("Robin Singh", 4);


function capitalizeWords(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

document.getElementById("capitalizeOutput").innerText = capitalizeWords("js string exercises");
