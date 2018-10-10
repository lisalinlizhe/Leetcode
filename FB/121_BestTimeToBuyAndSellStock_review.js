/**
 * Created by lizhelin on 18/10/9.
 */
var maxProfit = function(prices) {
  var min = prices[0];
  var max = 0;
  for(var i = 0; i < prices.length; i++){
    if(prices[i] <= min) {
      min = prices[i];
    }
    else{
      max = Math.max(max, prices[i] - min);
    }
  }
  return max;
};