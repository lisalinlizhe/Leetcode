/**
 * Created by llin on 6/3/18.
 */
// Did it yourself but thinking time is too long
var countAndSay = function(n) {
    var res = "";
    var count = 1;
    res = count + res;
    for(var i = 0; i < n - 1; i++){
        var index = 0;
        var len = res.length;
        var temp = "";
        while(index < len){
            while((index < len - 1) && res[index] === res[index + 1]){
                index++;
                count++;
            }
            temp = temp + count + res[index];
            index++;
            count = 1;
        }
        res = temp;
    }
    return res;
};