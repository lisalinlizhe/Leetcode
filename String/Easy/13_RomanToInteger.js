/**
 * Created by llin on 6/1/18.
 */
var romanToInt = function(s) {
    var len = s.length;
    res = 0;
    for(var i = len - 1; i>= 0; i--) {
        if(s[i] === "I") {
            if(i === len - 1) {res += 1; continue; }
            if((i + 1) < len && s[i+1] !== "V" && s[i+1] !== "X") res += 1;
            else res -=1;
        }
        else if(s[i] === "V") {
            res += 5;
        }
        else if(s[i] === "X") {
            if(i === len - 1) {res += 10; continue; }
            if((i + 1) < len && s[i+1] !== "L" && s[i+1] !== "C") res += 10;
            else res -=10;
        }
        else if(s[i] === "L") {
            res += 50;
        }
        else if(s[i] === "C") {
            if(i === len - 1) {res += 100; continue; }
            if((i + 1) < len && s[i+1] !== "D" && s[i+1] !== "M") res += 100;
            else res -=100;
        }
        else if(s[i] === "D") {
            res += 500;
        }
        else if(s[i] === "M") {
            res += 1000;
        }
    }
    return res;
};