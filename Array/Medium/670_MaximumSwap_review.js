/**
 * Created by lizhelin on 18/7/10.
 */
//Did it yourself 但是错了很多遍才对 but the final speed bit 100% !
var maximumSwap = function(num) {
  var map = {}, low = 0, high = 0;
  var max = -1;
  num = num.toString().split('');
  for(var i = 0; i < num.length; i++) {
    var index = i;
    for(var j = i + 1; j < num.length; j++) {
      if(num[j] > num[i] && num[j] >= max) {
        high = j;
        max = num[j];
      }
    }
    if(high !== 0) {
      var temp = num[i];
      num[i] = num[high];
      num[high] = temp;
      break;
    }
  }

  return parseInt(num.join(''));
};