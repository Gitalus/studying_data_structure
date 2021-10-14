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
    let aStringParsed = removeBackspaces(stringA).join('');
    let bStringParsed = removeBackspaces(stringB).join('');


    if (aStringParsed.length !== bStringParsed.length) return false;
    return aStringParsed === bStringParsed ? true : false;

}


console.log(compareString(stringA, stringB));