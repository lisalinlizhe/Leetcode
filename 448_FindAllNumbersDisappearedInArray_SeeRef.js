/**
 * Created by llin on 5/13/18.
 */
var findDisappearedNumbers = function(nums) {
    var res = [];
    for(var i = 0 ; i < nums.length; i++){
        index = Math.abs(nums[i]) - 1;
        if(nums[index] > 0) nums[index] *= -1;
    }
    for(var i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            res.push(i+1);
        }
    }
    return res;
};