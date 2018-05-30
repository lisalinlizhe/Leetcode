/**
 * Created by llin on 5/20/18.
 */
var containsDuplicate = function(nums) {
    var map =[];
    for(var i = 0 ; i < nums.length ; i++){
        if(map[nums[i]] === 1){
            return true;
        }
        map[nums[i]] = 1;
    }
    return false;
};