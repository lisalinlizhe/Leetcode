/**
 * Created by llin on 5/31/18.
 */
var judgeCircle = function(moves) {
    var lr = 0,ud = 0;
    var len = moves.length;
    for(var i = 0; i < len; i++) {
        if(moves[i] === "L"){
            lr++;
        }
        else if(moves[i] === "R"){
            lr--;
        }
        else if(moves[i] === "U"){
            ud++;
        }
        else{
            ud--;
        }
    }
    return lr === 0 && ud === 0;
};