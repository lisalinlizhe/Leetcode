/**
 * Created by llin on 5/31/18.
 */
//Needs review - could not figure that out, directly copy from the discussion
//How to go though a map in javascript
var findPairs = function(nums, k) {
    if(nums.length === 0 || k < 0) return 0;
    var map = {};
    var count = 0;
    var mapLength = 0;
    for(var i = 0; i < nums.length; i++) {
        if(map[nums[i]] !== undefined) map[nums[i]]++;
        else {
            map[nums[i]] = 1;
            mapLength++;
        }
    }
    for(var key in map){
        key = parseInt(key);
        if(k === 0) {
            if(map[key] >= 2) count++;
        }
        else{

            if(map[key + k] !== undefined) count++;
        }
    }
    return count;
};