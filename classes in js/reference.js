// [] === []; false ya que hace referencia a dos direcciones de memoria distinta
// [1] === [1]; false

let object1 = { value: 10 };

let object2 = object1;

let object3 = { value: 10 };

console.log(object1 === object2); // true por referenciación
console.log(object1 === object3); // false por ser distinta referencia