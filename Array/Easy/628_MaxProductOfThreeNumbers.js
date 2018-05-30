/**
 * Created by llin on 5/20/18.
 */
var maximumProduct = function(nums) {
    var max1, max2, max3 ;
    max1 = max2 = max3 = Number.NEGATIVE_INFINITY;
    var min1, min2;
    min1 = min2 = Number.POSITIVE_INFINITY;
    for(var i = 0; i < nums.length ; i++) {
        if(nums[i] <= min1) {
            min2 = min1;
            min1 = nums[i];
        }else if(nums[i] <= min2) {
            min2 = nums[i];
        }

        if(nums[i] >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        }
        else if(nums[i] >= max2){
            max3 = max2;
            max2 = nums[i];
        }
        else if(nums[i] >= max3){
            max3 = nums[i];
        }
    }
    return max1 * Math.max(min1 * min2, max2 * max3);
};