/**
 * Created by lizhelin on 18/8/12.
 */
var constructMaximumBinaryTree = function(nums) {
  var maxId = findMax(nums);
  if(maxId === -1) return null;
  var node = new TreeNode(nums[maxId]);
  node.left = constructMaximumBinaryTree(nums.slice(0, maxId));
  node.right = constructMaximumBinaryTree(nums.slice(maxId + 1, nums.length));
  return node;
};

var findMax = function(arr){
  if(arr.length === 0) return -1;
  var max = 0;
  for(var j = 1; j < arr.length; j++){
    if(arr[j] > arr[max]) {
      max = j;
    }
  }
  return max;
};