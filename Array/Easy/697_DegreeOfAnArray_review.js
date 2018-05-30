/**
 * Created by llin on 5/24/18.
 */
//mine is so slow:
// var findShortestSubArray = function(nums) {
//     var max = 1;
//     var len = nums.length;
//     var map = {};
//     var res = 1;
//     for(var i = 0 ; i < len ; i++){
//         if(map[nums[i]] !== undefined) {
//             map[nums[i]]+=1;
//             var index = nums.indexOf(nums[i]);
//             if(map[nums[i]] === max && res !== 1){
//                 res = Math.min(res, i - index + 1);
//             }
//             else if(map[nums[i]] > max){
//                 max = map[nums[i]];
//                 res = i - index + 1;
//             }
//         }
//         else{
//             map[nums[i]] = 1;
//         }
//         console.log(map);
//     }
//     return res;
// };

var findShortestSubArray = function(nums) {
    var max = 1;
    var len = nums.length;
    var map = {};
    var res = 1;
    for(var i = 0 ; i < len ; i++){
        var temp = map[nums[i]] ;
        if(temp) {
            temp.end= i;
            temp.count = temp.count + 1;
            console.log(temp.count);
            if (temp.count > max) {
                max = temp.count;
            }
        }
        else{
            map[nums[i]] = {start: i, end: i, count: 1};
        }
    }
    if (max === 1) {
        return 1
    }

    var minLength = 50000;
    Object.keys(map).forEach(function (propName) {
        var item = map[propName];
        if (item.count === max) {
            var diff = item.end - item.start + 1
            if (diff < minLength) {
                minLength = diff;
            }
        }
    });
    return minLength;
};