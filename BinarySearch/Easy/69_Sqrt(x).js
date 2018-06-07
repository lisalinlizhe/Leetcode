/**
 * Created by llin on 6/6/18.
 */
var mySqrt = function(x) {
    if(x === 1) return 1;
    var left = 1;
    var right = x;
    while(left <= right) {
        var mid = parseInt(left + (right - left)/2);
        if(mid * mid > x) {
            right = mid - 1;
        }
        else if(mid * mid < x) {
            left = mid + 1;
        }
        else if(mid * mid === x) {
            return mid;
        }
    }

    return left - 1;
};