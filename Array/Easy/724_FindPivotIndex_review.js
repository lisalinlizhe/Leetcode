/**
 * Created by llin on 5/30/18.
 */
//Did it right but super slow.

var pivotIndex = function(nums){
    var len = nums.length;
    var res = -1 ;
    var sum = 0;
    var leftSum = 0;
    for(var i = 0; i < len; i++) {
        sum += nums[i];
    }
    for(var j = 0; j < len; j++) {
        if(leftSum === sum - nums[j] -leftSum) return j;
        leftSum += nums[j];
    }
    return res;
};