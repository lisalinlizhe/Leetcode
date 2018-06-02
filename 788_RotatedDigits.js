/**
 * Created by llin on 6/1/18.
 */
var rotatedDigits = function(N) {
    var result = 0;
    for(var i = 1; i <= N; i++) {
        if(isValid(i)) result++;
    }
    return result;
};

var isValid = function(num) {
    var valid = false;
    var temp = 0;
    while(num >= 1) {
        temp = num % 10;
        if(temp === 2 || temp === 5 || temp === 6 || temp === 9 ) valid = true;
        else if(temp === 3 || temp === 4 ||temp === 7) return false;
        num = parseInt(num / 10);
    }
    return valid;
}