/**
 * Created by llin on 5/25/18.
 */
var dominantIndex = function(nums) {
    var largest = findLargest(nums);
    for(var j = 0; j < nums.length; j++) {
        if(j === largest[0]) continue;
        if(nums[j] !== 0 && (largest[1] < nums[j] * 2)) return -1;
    }
    return largest[0]
};

var findLargest = function(nums){
    var index = 0;
    var largest = [-1, 0];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > largest[1]){
            largest[0] = i;
            largest[1] = nums[i];
        }
    }
    return largest;
};