const testString = "A man, a plan, a canal: Panama";

function checkPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    let left = 0, right = str.length - 1;
    while (left <= right) {
        if (str[left++] !== str[right--]) return false;
    }

    return true;
}

console.log(checkPalindrome(testString));