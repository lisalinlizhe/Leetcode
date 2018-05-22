/**
 * Created by llin on 5/21/18.
 */
var twoSum = function(numbers, target) {
    var res = [];
    var map = {};
    for(var i = 0; i < numbers.length ; i++) {
        if(map[numbers[i]] !== undefined) {
            res.push(map[numbers[i]] + 1);
            res.push(i + 1);
        }
        map[target - numbers[i]] = i;
    }
    return res;
};