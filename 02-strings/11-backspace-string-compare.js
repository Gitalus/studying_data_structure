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
    let aStringParsed = removeBackspaces(stringA);
    let bStringParsed = removeBackspaces(stringB);


    if (aStringParsed.length !== bStringParsed.length) return false;
    for (let i in aStringParsed) {
        if (aStringParsed[i] !== bStringParsed[i]) {
            return false;
        }
    }
    return true;

}


console.log(compareString(stringA, stringB));