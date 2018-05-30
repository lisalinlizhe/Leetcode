/**
 * Created by llin on 5/22/18.
 */
var thirdMax = function(nums) {
    var len = nums.length;
    if(len === 1) return nums[0];
    if(len === 2) return Math.max(nums[0], nums[1]);
    var max1, max2, max3 ;
    max1 = max2 = max3 = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < len; i++) {
        if(nums[i] === max1 ||nums[i] === max2 || nums[i] === max3) continue;
        if(nums[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        }
        else if(nums[i] > max2) {
            max3 = max2;
            max2 = nums[i];
        }
        else if(nums[i] > max3){
            max3 = nums[i];
        }
    }
    if(max3 === Number.NEGATIVE_INFINITY) {
        if(max2 === Number.NEGATIVE_INFINITY){
            return max1;
        }
        return max1;
    }
    return max3;
};