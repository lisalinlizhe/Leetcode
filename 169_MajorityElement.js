/**
 * Created by llin on 5/20/18.
 */

//Javascript Associate array!!!!!!!!!!!!!!!
var majorityElement = function(nums) {
    var map = {};
    var max = 0;
    var temp = nums[0];
    for(var i = 0 ; i < nums.length ; i++){
        if(map[nums[i]] && map[nums[i]] !== 0){
            map[nums[i]] = map[nums[i]] + 1;
            if(map[nums[i]] > max){
                max = map[nums[i]];
                temp = nums[i];
            }
        }
        else {
            map[nums[i]] = 1;
        }

    }
    return temp;
};