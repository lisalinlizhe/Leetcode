/**
 * Created by llin on 5/13/18.
 */
var findMaxConsecutiveOnes = function(nums) {
    var res = 0;
    var count = 0;
    for(var i = 0; i < nums.length ; i++){
        if(nums[i]=== 1){
            count += 1;
        }
        else{
            res = Math.max(count, res);
            count = 0;
        }
    }

    return Math.max(count,res);
};