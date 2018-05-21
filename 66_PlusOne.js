/**
 * Created by llin on 5/20/18.
 */
var plusOne = function(digits) {
    var len = digits.length;
    var res = new Array(len + 1);
    var carry = 0;
    res[len] = (1 + digits[len - 1]) % 10 ;
    if((1 + digits[len - 1]) % 10 === 0) carry = 1;
    for(var i = len - 2; i>= 0; i--) {
        res[--len] = (digits[i] + carry) % 10;
        if((digits[i] + carry) === 10) {
            carry = 1
        }
        else {
            carry = 0
        }
    }
    if(carry === 1) {
        res[0] = 1;
    }
    else{
        for(var j = 0; j < digits.length ; j++) {
            res[j] = res[j + 1];
        }
        res.pop();
    }
    return res;
};