/**
 * Created by llin on 6/4/18.
 */
var nextGreatestLetter = function(letters, target) {
    var len = letters.length;
    var low = 0;
    var high = letters.length - 1;
    if(letters[low] > target || target >= letters[high]) return letters[0];
    while(low <= high) {
        var index = parseInt((low + high) / 2);
        if(letters[index] > target && letters[index - 1] < target) {
            return letters[index];
        }
        else if(letters[index] < target) {
            low = index + 1;
        }
        else if(letters[index] === target) {
            if(letters[index + 1] > target){
                return letters[index + 1];
            }
            else low++;
        }
        else if(letters[index] > target) {
            high = index - 1;
        }
    }
    return letters[0];
};