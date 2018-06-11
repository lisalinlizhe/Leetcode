/**
 * Created by lizhelin on 18/6/10.
 */
//Math problem
var countPrimes = function(n) {
  var notPrime = new Array(n).fill(false);
  var count = 0;
  for(var i = 2; i < n; i++) {
    if(notPrime[i] === false) {
      count++;
    }
    for(var j = 2; i*j < n; j++) {
      notPrime[i*j] = true;
    }
  }
  return count;
};