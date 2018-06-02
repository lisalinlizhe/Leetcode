/**
 * Created by llin on 6/1/18.
 */
var canConstruct = function(ransomNote, magazine) {
    var len1 = ransomNote.length;
    var len2 = magazine.length;
    if(ransomNote === magazine) return true;
    if(len1 > len2) return false;
    for(var i = 0; i < len1; i++) {
        var index = magazine.indexOf(ransomNote[i]);
        if(index !== -1) {
            magazine = magazine.replace(ransomNote[i], '');
        }
        else return false;
    }
    return true;
};