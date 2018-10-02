/**
 * Created by lizhelin on 18/9/9.
 */
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) return null;
  var left = 0;
  var right = nums.length - 1;
  var mid = left + parseInt((right - left) / 2);
  var root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(left, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1, right + 1));
  return root;
};