/**
 * Created by lizhelin on 18/6/26.
 */

//Did it yourself but too slow. Notice that indexOf has high time complexity!
var findRelativeRanks = function(nums) {
  var res = new Array(l)
  var numsCopy = Array.from(nums);
  var rankMap = new Map();
  var l = nums.length;
  numsCopy.sort(function(a,b) {return a-b;});
  for(var i = l - 1; i >=0 ; i--) {
    if(i === l - 1) rankMap[numsCopy[i]] = "Gold Medal";
    else if(i === l - 2) rankMap[numsCopy[i]] = "Silver Medal";
    else if(i === l -3) rankMap[numsCopy[i]] = "Bronze Medal";
    else rankMap[numsCopy[i]] = String(l - i);
  }
  for(var i=0; i<l; i++){
    res[i] = rankMap[nums[i]];
  }
  return res;
};