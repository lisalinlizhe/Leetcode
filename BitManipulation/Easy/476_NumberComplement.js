/**
 * Created by lizhelin on 18/6/18.
 */
// Find out how many bits are there for a number: use mask(11111111) & num
var findComplement = function(num) {
  var mask = ~0;
  while(num & mask) mask = mask << 1;
  return ~mask ^ num;
};