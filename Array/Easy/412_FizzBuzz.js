/**
 * Created by lizhelin on 18/6/25.
 */
var fizzBuzz = function(n) {
  var res = [];
  for(var i = 0; i < n; i++) {
    if((i + 1) % 3 === 0 && (i + 1) % 5 === 0) res.push("FizzBuzz");
    else if((i + 1) % 3 === 0) res.push("Fizz");
    else if((i + 1) % 5 === 0) res.push("Buzz");
    else{
      var temp = i + 1;
      res.push("" + temp);
    }
  }
  return res;
};