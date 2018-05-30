/**
 * Created by llin on 5/20/18.
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    if(len === 1){
        return target > nums[0] ? 1 : 0;
    }
    for(var i = 0 ; i < len ; i++) {
        if(nums[i] == target) return i;
        else if(nums[i] > target) return i;
        else if(nums[i] < target && i + 1 < len && nums[i + 1] > target) return i + 1;
        else if(i == len - 1) return len;
    }
    return len;
};