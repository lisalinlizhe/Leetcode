/**
 * Created by llin on 5/29/18.
 */

//Needs review - could not figure that out, directly copy from the discussion
//This is a problem using DP.
var minCostClimbingStairs = function(cost) {
    var len = cost.length;
    var minCost = cost;
    for (var i=2; i<len; i++) {
        minCost[i] += Math.min(minCost[i-1], minCost[i-2]);
    }
    return Math.min(minCost[len-1], minCost[len-2]);
};