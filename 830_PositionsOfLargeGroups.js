/**
 * Created by llin on 5/13/18.
 */
var largeGroupPositions = function(S) {
    var res = [];
    var count = 1;
    var len = S.length;

    for(var i = 0; i < len; i++){
        var index = i;
        while(S[index] === S[index+1] && (index + 1 < len)){
            index++;
            count++;
        }
        if(count >= 3){
            var subArr = [i, index];
            res.push(subArr);
        }
        if(index > 0) {
            i = index;
            count = 1;
        }
    }
    return res;
};