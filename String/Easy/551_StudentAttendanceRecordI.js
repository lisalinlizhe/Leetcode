/**
 * Created by llin on 6/2/18.
 */
var checkRecord = function(s) {
    var len = s.length;
    var numOfA = 0;
    var numOfL = 0;
    for(var i = 0; i < len; i++) {
        if(s.charAt(i) === "A") {
            numOfA++;
            if(numOfA === 2) return false;
        }
        else if(i < len - 1 && s.charAt(i) === "L" && s.charAt(i + 1) === "L" && s.charAt(i + 2) === "L"){
            return false;
        }
    }
    return true;
};