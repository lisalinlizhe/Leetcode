/**
 * Created by llin on 5/29/18.
 */
var findLengthOfLCIS = function(nums) {
    var len = nums.length;
    if(len === 1) return 1;
    var res = 0;
    var max = 0;
    for(var i = 0; i < len - 1; i++) {
        while(nums[i] < nums[i+1]){
            i++;
            res++;
        }
        max = Math.max(res + 1, max);
        res = 0;
    }
    return max;
};