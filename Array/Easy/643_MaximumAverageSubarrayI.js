/**
 * Created by llin on 5/30/18.
 */
var findMaxAverage = function(nums, k) {
    var len = nums.length;
    var sum = 0;
    var max = 0;
    for(var i = 0; i < k; i++) {
        sum += nums[i];
    }
    max = sum;
    for(var j = k; j < len; j++){
        sum = sum + nums[j] - nums[j - k];
        if(sum>max) max = sum;
    }
    return max / k;
};