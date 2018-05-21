/**
 * Created by llin on 5/20/18.
 */
var twoSum = function(nums, target) {
    var res = [];
    var map = {};
    var len = nums.length;
    if(len < 2) return 0;
    for(var i = 0; i < len ; i++) {
        if(map[nums[i]] !== undefined) {
            res[0] = map[nums[i]];
            res[1] = i;
        }
        map[target - nums[i]] = i;
    }
    return res;
};