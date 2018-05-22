/**
 * Created by llin on 5/21/18.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    k = k % len;
    var copy = new Array(len);
    for(var i = 0; i < len; i++) {
        var index = (i + k) % len;
        copy[index] = nums[i];
    }
    for(var j = 0; j < len; j++){
        nums[j] = copy[j];
    }
};