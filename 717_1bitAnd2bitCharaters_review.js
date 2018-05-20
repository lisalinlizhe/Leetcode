/**
 * Created by llin on 5/20/18.
 */
//Did it myself but after seeing the hints.

var isOneBitCharacter = function(bits) {
    var len = bits.length;
    for(var i = 0; i < len ; i++) {
        if(bits[i] == 1){
            if(i == len - 2) return false;
            i += 1;
        }
    }
    return true;
};