/**
 * Created by llin on 5/20/18.
 */
var maxProfit = function(prices) {
    var len = prices.length;
    var min = prices[0];
    var res = 0;
    for(var i = 1 ; i < len; i++){
        if(prices[i] > min) {
            res = Math.max(res, prices[i] - min);
        }
        else{
            min = prices[i];
        }
    }
    return res;
};