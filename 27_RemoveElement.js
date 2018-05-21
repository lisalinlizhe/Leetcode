/**
 * Created by llin on 5/20/18.
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    for(var i = 0 ; i < len; i++) {
        if(nums[i] == val){
            nums[i] = nums[len - 1];
            i--;
            len--;
        }
    }
    return len;
};