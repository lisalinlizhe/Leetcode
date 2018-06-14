/**
 * Created by llin on 6/8/18.
 */
// 1 pace 2 paces loop - need to understand that the loop will have same values.

var isHappy = function(n) {
    var x = n;
    var y = n;
    while(x > 1){
        x = getDigits(x);
        if(x === 1) return true;
        y = getDigits(getDigits(y));
        if(y === 1) return true;
        if(x===y) return false
    }
    return true;
};
var getDigits = function(num){
    var sum = 0;
    while(num > 0) {
        sum += (num %10) * (num %10);
        num = parseInt(num /10);
    }
    return sum;
};