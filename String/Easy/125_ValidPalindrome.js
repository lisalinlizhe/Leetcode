/**
 * Created by llin on 6/3/18.
 */
var isPalindrome = function(s) {
    var left = 0;
    var right = s.length - 1;
    var leftValue = "";
    var rightValue = "";
    s = s.toLowerCase();
    while(left < right) {
        while(left <= right && !isLetter(s[left])) left++;
        if(left < s.length) leftValue = s[left];
        while(right >= left && !isLetter(s[right])) right--;
        if(right >= 0) rightValue = s[right];
        if(left >= right) return true;
        if(leftValue === rightValue) {
            left++;
            right--;
        }
        else return false;
    }
    return true;
};

var isLetter = function(char) {
    return char >= 'a' && char <= 'z' || char >= "0" && char <= "9";
};