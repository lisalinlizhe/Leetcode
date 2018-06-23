/**
 * Created by lizhelin on 18/6/22.
 */
var sortedArrayToBST = function(nums) {
  if(nums.length === 0) return null;
  var left = 0;
  var right = nums.length - 1;
  var mid = left + parseInt((right - left)/2);
  var node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
  return node
};