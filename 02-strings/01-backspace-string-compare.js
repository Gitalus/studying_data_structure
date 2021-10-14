const stringA = "ab#c";
const stringB = "az#c";

function removeBackspaces(string) {
    let stringList = [];
    for (const letter of string) {
        if (letter !== "#") {
            stringList.push(letter);
        }
        else {
            stringList.pop();
        }
    }
    return stringList
}

function compareString(stringA, stringB) {
    let stringListA = removeBackspaces(stringA);
    let stringListB = removeBackspaces(stringB);


    if (stringListA.length !== stringListB.length) return false;
    return stringListA.join('') === stringListB.join('') ? true : false;

}


console.log(compareString(stringA, stringB));