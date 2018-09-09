/**
 * Created by lizhelin on 18/9/9.
 */
//?????
//https://leetcode.com/problems/mirror-reflection/discuss/146336/Java-solution-with-an-easy-to-understand-explanation.
var mirrorReflection = function(p, q) {
  var m = q, n = p;
  while(m % 2 === 0 && n % 2 === 0){
    m /= 2;
    n /= 2;
  }

  if(n % 2 === 0) return 2;
  if(n % 2 === 1){
    if(m % 2 === 0) return 0;
    else return 1;
  }
};