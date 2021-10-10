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
    // return string.split('').reverse().join('');
    return [...string].reverse().join('');
}

// slowest:
function reverseWithRecursion(string) {
    if (string === '') {
        return '';
    }
    return reverseWithRecursion(string.substr(1)) + string.charAt(0);
    // oneline:
    // return string === '' ? '' : reverseWithRecursion(string.substr(1)) + string.charAt(0);
}

console.log('First method:\n\t', reverseString('Hi my name is Italo'));
console.log('Second method:\n\t', reverseUsingMethods('Hi my name is Italo'));
console.log('Third method:\n\t', reverseWithRecursion('Hi my name is Italo'));