/**
 * Created by lizhelin on 18/7/3.
 */
// 想了半天！！！！！！！
var maxProfit = function(prices, fee) {
  var max = 0;
  prices[0] += fee;
  var buy = prices[0];
  var res = 0;
  for(var i = 1 ; i < prices.length; i++) {
    if(prices[i] <= prices[i - 1]) {
      prices[i] = Math.min(prices[i - 1], prices[i] + fee);
    }
    else{
      var temp = prices[i] - buy;
      res = Math.max(res + prices[i] - prices[i - 1], temp);
      buy = Math.min(prices[i + 1] + fee, buy);
    }
  }
  return res;
};