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

console.log(reverseString('Hi my name is Italo'));