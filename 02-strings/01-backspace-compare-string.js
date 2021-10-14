// Same exercise #: 11 in arrays, but using only strings

const stringA = "ab#c";
const stringB = "az#c";

function compareString(stringA, stringB) {
    const sizeA = stringA.length;
    const sizeB = stringB.length;
    let parsedA = "";
    let parsedB = "";
    for (let i = sizeA - 1, hashFound = sizeA - 1; i >= 0; i--) {
        if (stringA[i] !== "#") {
            if (stringA[hashFound] !== "#") {
                parsedA = stringA[i] + parsedA;
            }
            hashFound--;
        }
        else if (stringA[hashFound] !== "#") {
            hashFound--;
        }
    }
    return parsedA;
}
console.log(compareString(stringA, stringB));