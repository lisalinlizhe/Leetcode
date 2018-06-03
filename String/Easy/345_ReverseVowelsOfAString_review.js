/**
 * Created by llin on 6/3/18.
 */
// Did it yourself but too slow. Understand the root of reverse -> 1st replace last, 2nd replace 2nd last, etc..
var reverseVowels = function(s) {
    var vowels = ["a", "e", "i", "o", "u", "A","E","I","O","U"];
    var left = 0;
    var right = s.length;
    var s = s.split('');
    while(left < right){
        while(left < right && vowels.indexOf(s[left]) === -1 ){
            left++;
        }
        while(right > left && vowels.indexOf(s[right]) === -1 ){
            right--;
        }
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    };
    return s.join('');
};