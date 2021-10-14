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

var backspaceCompare = function (s, t) {
    let i = s.length - 1, j = t.length - 1;
    let skipS = 0, skipT = 0;

    while (i >= 0 || j >= 0) { // While there may be chars in build(S) or build (T)
        while (i >= 0) { // Find position of next possible char in build(S)
            if (s[i] == '#') { skipS++; i--; }
            else if (skipS > 0) { skipS--; i--; }
            else break;
        }
        while (j >= 0) { // Find position of next possible char in build(T)
            if (t[j] == '#') { skipT++; j--; }
            else if (skipT > 0) { skipT--; j--; }
            else break;
        }
        // If two actual characters are different
        if (i >= 0 && j >= 0 && s[i] != t[j])
            return false;
        // If expecting to compare char vs nothing
        if ((i >= 0) != (j >= 0))
            return false;
        i--; j--;
    }
    return true;
};


console.log(compareString(stringA, stringB));