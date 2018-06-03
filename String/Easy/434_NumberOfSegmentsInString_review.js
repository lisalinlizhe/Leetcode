/**
 * Created by llin on 6/3/18.
 */
// Did it yourself but solution is worth reviewing

var countSegments = function(s) {
    var len = s.length;
    var res = 0;
    var left = 0;
    var right = len - 1;
    while(left < len && s[left] === " ") left++;
    while(right > left && s[right] === " ") right--;
    if(left > right) return 0;
    for(left = left + 1; left <= right; left++) {
        while(left <= right && s[left - 1] !== " " && s[left] === " ") {
            left++;
            res++;
        }
    }
    return res + 1;
};

// solution
// s.trim() => remove the spaces in the front and end
// replace(/\s+/g, " ") => replace all the spaces inside with " "


// var countSegments = function(s) {
//     var trimS = s.trim().replace(/\s+/g, " ");
//     console.log(trimS);
//     if(!trimS) return 0;
//     return trimS.split(" ").length;
// };