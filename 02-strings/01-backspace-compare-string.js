// Same exercise #: 11 in arrays, but using only strings

const stringA = "ab#c";
const stringB = "az#c";

function removeBackspaces(string) {
    const sizeStr = string.length;
    let parsedStr = "";
    for (let i = sizeStr - 1, hashFound = sizeStr - 1; i >= 0; i--) {
        if (string[i] !== "#" && string[hashFound--] !== "#") {
            parsedStr = string[i] + parsedStr;
        }
        else if (string[hashFound] !== "#") {
            hashFound--;
        }
    }
    return parsedStr;
}

function compareString(stringA, stringB) {

    let parsedA = removeBackspaces(stringA);
    let parsedB = removeBackspaces(stringB);

    return parsedA === parsedB;
}
console.log(compareString(stringA, stringB));