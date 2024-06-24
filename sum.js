// function to get the sum of group of numbers
function sum(...nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3000, 4));
