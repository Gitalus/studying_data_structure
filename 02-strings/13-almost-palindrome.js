const testString = "race a car";

function almostPalindrome(s) {
    s = s.replace(/[^A-Za-z0-9]/g, "");
    function checkPalindrome(str) {
        let left = 0, right = str.length - 1;
        while (left <= right) {
            if (str[left++] !== str[right--]) return false;
        }
        return true;
    }
    let left = 0, right = s.length - 1;
    while (left <= right) {
        if (s[left] !== s[right]) {
            let temp1 = s.substr(0, left) + s.substr(left + 1);
            let temp2 = s.substr(0, right) + s.substr(right + 1);
            return checkPalindrome(temp1) || checkPalindrome(temp2);
        }
        left++; right--;
    }
    return true;
}

console.log(almostPalindrome(testString));