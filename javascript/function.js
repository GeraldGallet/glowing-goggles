function sayHello() {
  console.log('Hello world!');
}

function sayHelloTo(name) {
  console.log('Hello ' + name);
}

const add = (a, b) => a + b

const applyFunction = (a, b, c) => {
  return c(a, b);
}

sayHello();
sayHelloTo('Gérald');
const c = add(1, 2);
console.log(c);
const d = applyFunction(2, 3, add);
console.log(d)

const e = add('Gé', 'rald')
console.log(e)
const f = applyFunction(1, 2, 3);
console.log(f)
