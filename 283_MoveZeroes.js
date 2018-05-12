/**
 * Created by llin on 5/12/18.
 */
var moveZeroes = function(nums) {
    var length = nums.length;
    var index = 0;
    for(var i = 0; i < length ; i++) {
        if(nums[i] !== 0){
            nums[index++] = nums[i];
        }
    }
    for(var j = index ; j < length ; j++){
        nums[j] = 0;
    }
}