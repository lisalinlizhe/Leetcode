/**
 * Created by llin on 5/21/18.
 */

//questions regarding to Dupe - think of HASHMAP!!!
var containsNearbyDuplicate = function(nums, k) {
    var len = nums.length;
    var map = {};
    for(var i = 0; i < len; i++){
        if(map[nums[i]] !== undefined) {
            if(i - map[nums[i]] <= k)
                return true;
        }
        map[nums[i]] = i;
    }
    return false;
};