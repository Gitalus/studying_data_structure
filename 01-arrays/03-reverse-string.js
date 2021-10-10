// Create a function that reverses a string:
// 'Hi my name is Italo' should be:
// olatI si eman ym iH'

function reverseString(string) {
    let newString = '';
    let size = string.length;
    for (let index = size - 1; index >= 0; index--) {
        newString += string[index];
    }
    return newString;
}

function reverseUsingMethods(string) {
    return string.split('').reverse().join('');
}

console.log('First method:\n\t', reverseString('Hi my name is Italo'));
console.log('Second method:\n\t', reverseUsingMethods('Hi my name is Italo'));