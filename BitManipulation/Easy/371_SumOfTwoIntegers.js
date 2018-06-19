/**
 * Created by lizhelin on 18/6/18.
 */
var getSum = function(a, b) {
  return b === 0? a: getSum(a^b, (a&b) << 1);
};