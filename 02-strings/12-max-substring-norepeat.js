const s = "edcfgcdtjudks";

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

// Sliding window
var lengthOfLongestSubstring = function (s) {
    let strLength = s.length;
    if (strLength <= 1) return strLength;
    const seenChars = {};
    let left = 0, longest = 0;
    for (let right = 0; right < strLength; right++) {
        const currentChar = s[right];
        const prevSeenChar = seenChars[currentChar];
        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }
        seenChars[currentChar] = right;
        longest = Math.max(longest, (right - left + 1));
    }
    return longest;
};

console.log(lengthOfLongestSubstring(s));