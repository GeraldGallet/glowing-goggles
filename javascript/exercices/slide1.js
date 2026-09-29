console.log('----- EXERCICE 1');

let a = 1;
let b = 2;
let c;

console.log(`--before: a: ${a} | b: ${b}`)
c = a;
a = b;
b = c;
console.log(`--after: a: ${a} | b: ${b}`)

let d = 3;
let e = 4;
console.log(`--before: d: ${d} | e: ${e}`)
d = d + e;
e = d - e;
d = d - e;
console.log(`--after: d: ${d} | e: ${e}`)

console.log('\n----- EXERCICE 2');
function multiplyWithCheck(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'error';
  }

  return a * b;
}

console.log(multiplyWithCheck(5, 6)); // 30
console.log(multiplyWithCheck(5, '6')); // 'error'
console.log(multiplyWithCheck(true, 6)); // 'error'

console.log('\n----- EXERCICE 3');
function greetUser(name) {
  console.log(`Hello ${name}`)
}

greetUser('Gérald')

console.log('\n----- EXERCICE 4');
function getParity(num) {
  if (typeof num !== 'number') {
    return 'error'
  }
  return num % 2 === 0;
}

console.log(getParity(1))
console.log(getParity(2))
console.log(getParity('a'))
console.log(getParity(true))
console.log(getParity(false))
console.log(getParity({}))

console.log('\n----- EXERCICE 5');
const gerald = {
  age: 30,
  name: 'Gerald'
}

const alice = {
  age: 30,
  name: 'Alice'
}

const bob = {
  age: 30,
  name: 'Bob'
}

console.log('-- before')
console.log(`${gerald.name}: ${gerald.age}`);
console.log(`${alice.name}: ${alice.age}`);
console.log(`${bob.name}: ${bob.age}`);

function changeAge(person) {
  return person.age = 28;
}

changeAge(gerald);
changeAge({ ...alice });
changeAge(JSON.parse(JSON.stringify(bob)));

console.log('-- after')
console.log(`${gerald.name}: ${gerald.age}`);
console.log(`${alice.name}: ${alice.age}`);
console.log(`${bob.name}: ${bob.age}`);
