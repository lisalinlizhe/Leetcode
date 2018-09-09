/**
 * Created by lizhelin on 18/9/9.
 */
//?????
var mirrorReflection = function(p, q) {
  var i = 1;
  while(i<=q){
    if((i*p)%q==0){
      var round = (i*p)/q;
      if(round%2==1){
        if(i%2==1){
          return 1;
        }else{
          return 0;
        }
      }else{
        return 2;
      }
    }
    i++;
  }
};