/**
 * Created by llin on 6/3/18.
 */
var validPalindrome = function(s) {
    var left = 0;
    var right = s.length - 1;
    var count = 0;
    while(left < right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        }
        else{
            var str = s.substring(left, right + 1);
            var strLen = str.length;
            if(isPal(str.substring(0, strLen - 1))) return true;
            else if(isPal(str.substring(1, strLen))) return true;
            else return false;
        }
        if(left >= right) return true;
    }
    return true;
};

var isPal = function(str) {
    var low = 0;
    var high = str.length - 1;
    while(low < high) {
        if(str[low] === str[high]) {
            low++;
            high--;
        }
        else if(str[low] !== str[high]) return false;
        if(low >= high) return true;
    }
    return true;
};