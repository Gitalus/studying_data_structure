const stringA = "ab#c";
const stringB = "az#c";

function compareString(stringA, stringB) {
    let stringListA = [];
    let stringListB = [];

    for (const letter of stringA) {
        if (letter !== "#") {
            stringListA.push(letter);
        }
        else {
            stringListA.pop();
        }
    }

    for (const letter of stringB) {
        if (letter !== "#") {
            stringListB.push(letter);
        }
        else {
            stringListB.pop();
        }
    }

    if (stringListA.length !== stringListB.length) return false;
    return stringListA.join('') === stringListB.join('') ? true : false;

}

console.log(compareString(stringA, stringB));