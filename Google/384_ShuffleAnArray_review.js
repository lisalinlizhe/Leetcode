/**
 * Created by lizhelin on 18/9/9.
 */
//1. remember to clone an array - arr.slice(0).
//2. shuffle through the whole array.
var Solution = function(nums) {
  this.nums = nums || [];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  var a = this.nums.slice(0);
  for(var i = 0; i < a.length; i++) {
    var idx = parseInt(Math.random() * (a.length - i)) + i;
    var tmp = a[i];
    a[i] = a[idx];
    a[idx] = tmp;
  }
  return a;
};