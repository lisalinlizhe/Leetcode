/**
 * Created by llin on 6/3/18.
 */
var compress = function(chars) {
    var len = chars.length;
    var count = 1;
    var index = 0;
    for(var i = 0; i< len; i++){
        while(i < len - 1 && chars[i] === chars[i+1]){
            count++;
            i++;
        }
        if(count > 1){
            chars[index++] = chars[i];
            if(count >= 10) {
                var temp = "" + count;
                var j = 0;
                while(j < temp.length) {
                    chars[index++] = temp[j].toString();
                    j++;
                }
            }else{
                chars[index++] = count.toString();
            }
            count = 1;
        }
        else chars[index++] = chars[i];
    }
    return index;
};