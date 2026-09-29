// EXERCICE 1

function computeSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    // sum = sum + arr[i]
    sum += arr[i]
  }

  return sum;
}

function computeSumReduce(arr) {
  return arr.reduce((acc, x) => acc + x, 0)
}

const myArray = [-1, -2, -3, -4, -5, -3];

console.log('--- EXERCICE 1')

const result =
console.log(computeSum(myArray))

console.log(computeSum(myArray))
console.log(computeSumReduce(myArray))

// EXERCICE 2
function computeHighest(arr) {
  if (!arr.length) {
    return null;
  }

  let result = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > result) {
      result = arr[i]
    }
  }

  return result;
}

function computeHighestReduce(arr) {
  return arr.reduce((acc, x) => {
    return (acc < x) ? (x) : (acc);
  }, 0)
}

console.log('--- EXERCICE 2')
console.log(computeHighest(myArray))
console.log(computeHighestReduce(myArray))
console.log(computeHighest([]))
// EXERCICE 3

function manualReverse(arr) {
  let result = []

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }

  return result;
}

console.log('EXERCICE 3');
console.log(manualReverse((myArray)))

// EXERCICE 4
function computeMean(arr) {
  if (!arr.length) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i]
  }

  return result / arr.length;
}

function computeMeanReduce(arr) {
  const result = arr.reduce((acc, x) => {
    return acc + x;
  }, 0)

  return result / arr.length
}

console.log('--- EXERCICE 4')
console.log(computeMean(myArray))
console.log(computeMeanReduce(myArray))
console.log(computeMean([]))

function fibo(n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(50))
