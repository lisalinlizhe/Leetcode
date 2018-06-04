/**
 * Created by llin on 6/3/18.
 */
var isValid = function(s) {
    var order = "";
    var len = s.length;
    if(len === 0) return true;
    if(len <= 1) return false;
    for(var i = 0 ; i < len; i++) {
        if(s[i] === "("){
            order = ")" + order;
        }
        else if(s[i] === "["){
            order = "]" + order;
        }
        else if(s[i] === "{"){
            order = "}" + order;
        }
        else if(s[i] !== order[0]) {
            return false;
        }
        else if(s[i] === order[0]){
            order = order.substring(1, order.length);
        }
    }
    return order.length === 0;
};