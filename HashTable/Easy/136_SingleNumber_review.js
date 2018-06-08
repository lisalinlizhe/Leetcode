/**
 * Created by llin on 6/8/18.
 */
// Mine using Hashmap is OK. But need to check bit manipulation
var singleNumber = function(nums) {
    var map = {};
    var len = nums.length;
    for(var i = 0; i < len; i++) {
        if(map[nums[i]] !== undefined) {
            map[nums[i]]++;
        }
        else map[nums[i]] = 1;
    }
    var keys = Object.keys(map);
    for(var j = 0; j < keys.length; j++){
        var key = keys[j];
        if(map[key] === 1) return parseInt(key);
    }
};


// CHECK THIS!!!!!!!!
// var singleNumber = function(nums) {
//     let length = nums.length;
//
//     if(length < 2) return nums[0];
//
//     let result = 0;
//
//     for(let i = 0; i < length; i++) {
//         result ^= nums[i];
//     }
//
//     return result;
// };