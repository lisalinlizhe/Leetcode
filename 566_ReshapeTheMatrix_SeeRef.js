/**
 * Created by llin on 5/13/18.
 */

// Lisa
var matrixReshape = function(nums, r, c) {
    var row = nums.length;
    var col = nums[0].length;
    if (r * c !== row * col) {return nums;}
    var index = 0;
    var newNums = modifiedNums(nums);
    var res = [];
    for(var i = 0; i < r; i++){
        res[i] = [];
        for(var j = 0; j < c; j++){
            res[i][j] = newNums[index++];
        }
    }
    return res;
};

var modifiedNums = function(nums){
    var row = nums.length;
    var col = nums[0].length;
    var index = 0;
    var arr = new Array(row * col);
    for(var i = 0; i < row; i++){
        for(var j =0 ; j < col; j++){
            arr[index++] = nums[i][j];
        }
    }
    return arr;
};

// var matrixReshape = function(nums, r, c){
//     if (nums.length * nums[0].length !== r * c) return nums;
//     let row = nums.length;
//     let arr = [];
//     let res = [];
//
//     for(let i = 0; i < row; i++){
//         arr.push(...nums[i]);
//     }
//
//     for(let j  = 0; j < r; j++){
//         res.push(arr.splice(0, c));
//     }
//
//     return res;
// }