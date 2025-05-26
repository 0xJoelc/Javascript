// String manipulation function
// reverse a string
function revString(revStr) {
  const reverseS = revStr.split(``).reverse().join(``);
  return reverseS;
}
console.log(revString(`pentagon`));

// count characters
function countChar(char) {
  const count = char.length;
  return count;
}
console.log(countChar(`hexagon`));

// capitalize words
function capsLock(name) {
  let value = name.toUpperCase();
  return value;
}
console.log(capsLock(`joel`));

// Array function

// find max and min num
function maxMinNum(arr) {
  const minNum = Math.min(...arr);

  const maxNum = Math.max(...arr);
  result = [minNum, maxNum];

  return result;
}
console.log(maxMinNum([10, 5, 3, 8]));

// // sum of array
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum([5, 3, 2]));

// filter array

function arrFilter(arr) {
  const filtered = arr.filter((filtered) => filtered < 4);
  return filtered;
}
console.log(arrFilter([3, 2, 1, 5, 6, 9]));

// Mathematical function
// factorial
function factiorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
  1;
}
console.log(factiorial(5));
// Prime Number

function checkPrimeNumber(n) {
  if (n % 2 === 0) {
    console.log(`n is not a prime number`);
  } else if (n % 3 === 0) {
    console.log(`n is not a prime number`);
  } else {
    console.log(`n is a prime`);
  }
}
console.log(checkPrimeNumber(7));

// fibonacci sequence
function fibSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log(fibSequence(15));
