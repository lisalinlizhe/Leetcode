/**
 * Created by llin on 6/4/18.
 */

// Did it yourself but tooooooo slow!!
var arrangeCoins = function(n) {
    var num = 0;
    for(var i = 0; ;i++){
        n -= i;
        if(n < 0) return i-1;
    }
    return 0;
};