/**
 * Created by llin on 5/20/18.
 */
var maxProfit = function(prices) {
    var res = 0;
    var len = prices.length;
    var min = prices[0];
    for(var i = 0 ; i < len ; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
        else {
            while(i < len - 1 && prices[i + 1] > prices[i]) i++;
            res += prices[i] - min;
            min = prices[i];
        }
    }
    return res;
};