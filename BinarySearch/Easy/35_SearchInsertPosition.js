/**
 * Created by llin on 6/4/18.
 */
var searchInsert = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while(low <= high) {
        var index = parseInt((low + high )/ 2);
        if(nums[index] > target) {
            high = index - 1;
        }
        else if(nums[index] < target) {
            low = index + 1;
        }
        else if(nums[index] === target) return index;
    }
    return low;
};