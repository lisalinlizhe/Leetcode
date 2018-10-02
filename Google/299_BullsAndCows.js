/**
 * Created by lizhelin on 18/9/16.
 */
var getHint = function(secret, guess) {
  var numberOfA = 0;
  var numberOfB = 0;
  var map = {};
  for(var i = 0, k = 0; i < secret.length && k < guess.length; i++, k++){
    if(secret[i] === guess[k]) {
      numberOfA++;
      guess = guess.substring(0, k) + guess.substring(k + 1, guess.length);
      k--;
    }
    else {
      var n = secret[i];
      if(map[n] !== undefined) map[n]++;
      else map[n] = 1;
    }
  }

  for(var j = 0; j < guess.length; j++) {
    var num = guess[j];
    if(map[num] > 0){
      numberOfB++;
      map[num]--;
    }
  }
  return numberOfA + 'A' + numberOfB + 'B';
};