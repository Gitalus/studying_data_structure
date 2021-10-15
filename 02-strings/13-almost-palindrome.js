const testString = "Race a car"; // raceacar

function almostPalindrome(s) {
    function checkPalindrome(str, left, right) {

        while (left <= right) {
            if (str[left++] !== str[right--]) return false;
        }
        return true;
    }

    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    let left = 0, right = s.length - 1;

    while (left <= right) {
        if (s[left] !== s[right]) {
            return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
        }
        left++; right--;
    }

    return true;
}

console.log(almostPalindrome(testString));