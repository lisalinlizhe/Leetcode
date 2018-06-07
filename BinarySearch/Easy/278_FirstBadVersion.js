/**
 * Created by llin on 6/6/18.
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1;
        var right = n;
        while(left <= right) {
            var mid = left + parseInt((right - left)/2);
            if(!isBadVersion(mid)) left = mid + 1;
            else if(isBadVersion(mid)) {
                right = mid - 1;
            }
        }
        return left;
    };
};