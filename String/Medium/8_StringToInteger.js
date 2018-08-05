/**
 * Created by lizhelin on 18/8/5.
 */
var myAtoi = function(str) {
  return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648);
};