/**
 * Created by llin on 6/6/18.
 */
// Could not figure out yourself

var findRadius = function(houses, heaters) {
    var len1 = houses.length;
    var len2 = heaters.length;
    houses.sort(function(a, b) {return a - b;});
    heaters.sort(function(a, b) {return a - b;});
    var min = -1;
    var j = 0;
    var i = 0;
    while(i < len1) {
        while(j < len2 - 1 && (Math.abs(heaters[j + 1] - houses[i]) <= Math.abs(heaters[j] - houses[i]))){
            j++;
        }
        min = Math.max(min, Math.abs(heaters[j] - houses[i]));
        i++;
    }
    return min;
};
