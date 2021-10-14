const string = "edcfgcdtjudks";

function lengthOfLongestSubstring(string) {
    let strLength = string.length;
    if (strLength <= 1) return strLength;

    let longest = 0;
    for (let left = 0; left < strLength; left++) {
        let seenChars = {}, currentLength = 0;
        for (let right = left; right < strLength; right++) {
            const currentChar = string[right];
            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(longest, currentLength);
            }
            else {
                break;
            }
        }
    }
    return longest;
}

console.log(lengthOfLongestSubstring(string));