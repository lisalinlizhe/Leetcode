/**
 * Created by lizhelin on 18/8/15.
 */
var kthSmallest = function(root, k) {
  var arr = [];
  helper(root, arr);
  return arr[k - 1];
};

var helper = function(node, arr){
  if(node === null) return arr;
  helper(node.left, arr);
  arr.push(node.val);
  helper(node.right, arr);
};