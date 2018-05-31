/**
 * Created by llin on 5/31/18.
 */
//Needs review - could not figure that out, directly copy from the discussion
var findUnsortedSubarray = function(nums) {
    var len = nums.length;
    var min = nums[len - 1];
    var max = nums[0];
    var end = -2;
    var start = -1;
    for(var i = 1; i < len; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[len - 1 - i]);
        if(nums[i] < max) end = i;
        if(nums[len - 1 - i] > min) start = len - 1 - i;
    }
    return end- start +1;
}