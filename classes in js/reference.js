// [] === []; false ya que hace referencia a dos direcciones de memoria distinta
// [1] === [1]; false

let object1 = { value: 10 };

let object2 = object1;

let object3 = { value: 10 };

console.log(object1 === object2); // true por referenciación
console.log(object1 === object3); // false por ser distinta referencia

object1.value = 15;

console.log(object2.value); // 15, ya que object 1 y 2 apuntan a la misma dirección de memoria

/*
tipos primitivos:
    Number
    String
    Boolean
    null
    undefined
El uso de tipos "primitivos" se refiere a que sus valores son la transformación de los bits
que la memoria almacena.
Los de tipo referencia, son tipos que se definen por su estructura y sus valores son la referencia
de memoria.
*/