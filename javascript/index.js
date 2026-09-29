console.log('Hello world!');

const myConst = 4;
var myVar = 4;
let myLet = 4;

myConst = 5;
myVar = 5;
myLet = 5;

if (true) {
  let myLet2 = 5;
  var myVar2 = 5;


  console.log(myLet);
}

console.log(myLet2);

// JSON
const myObject = {
  age: 30,
  name: 'Gérald',
  pet: {
    type: 'cat'
  }
};

console.log(myObject.pet.type);
