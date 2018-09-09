/**
 * Created by lizhelin on 18/9/9.
 */
var permute = function(nums) {
  if(nums.length === 0) return [[]];
  var res = [];
  res.push([nums[0]]);
  for(var i = 1; i < nums.length; i++) {
    var num = nums[i];
    var l = res.length;
    for(var j = 0; j < l; j++){
      var arr = res.shift();
      //front
      var f = [num].concat(arr);
      res.push(f);
      //back
      var b = arr.concat([num]);
      res.push(b);
      if(arr.length > 1){
        for(var k = 1; k < arr.length; k++) {
          var temp = arr.slice(0, k).concat([num]).concat(arr.slice(k, arr.length + 1));
          res.push(temp);
        }
      }
    }
  }
  return res;
};