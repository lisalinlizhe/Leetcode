/**
 * Created by llin on 6/4/18.
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;
    var output = [];
    var map = {};
    var res = [];
    for(var i = 0 ; i < len ; i++) {
        if(map[numbers[i]] !== undefined) {
            res.push(map[numbers[i]] + 1);
            res.push(i + 1);
        }
        else {
            map[target - numbers[i]] = i;
        }
    }
    return res;
};