/**
 * Created by lizhelin on 18/6/18.
 */
var countPrimeSetBits = function(L,R) {
  var res = 0;
  var primes = [2,3,5,7,11,13,17,19,21,23,29];
  for(var i = L; i <= R; i++) {
    var bit = 0;
    for(var n = i; n > 0; n >>= 1) {
      bit += n & 1;
    }
    if(primes.indexOf(bit) !== -1) res++;
  }
  return res;
};