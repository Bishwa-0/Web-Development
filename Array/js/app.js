function first(array, n) {
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
}

const testResults = [
  first([7, 9, 0, -2]),
  first([], 3),
  first([7, 9, 0, -2], 3),
  first([7, 9, 0, -2], 6),
  first([7, 9, 0, -2], -3)
];

const outputContainer = document.getElementById("output");
outputContainer.innerHTML = testResults
  .map((res, i) => `<p>Output ${i + 1}: ${JSON.stringify(res)}</p>`)
  .join("");
