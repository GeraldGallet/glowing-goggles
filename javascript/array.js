const myArray = [2, 1, 3];

const reduced = myArray.reduce((accumulator, x) => {
  return accumulator + x
}, 0)

// 0
// 1. (0, 1) => 1
// 2. (1, 2) => 3
// 3. 3, 3 => 6.

console.log(reduced)

myArray.sort();
console.log(myArray)

const students = [{ name: 'Alice', grade: 18 }, { name: 'Bob', grade: 15 }];
students.sort((a, b) => a.grade - b.grade)

console.log(myArray.join(', '))

console.log('--slice')
console.log(myArray.slice(1, 2))
console.log(myArray)
console.log('--splice')
console.log(myArray.splice(1, 2))
console.log(myArray)

const emptyArray = []
