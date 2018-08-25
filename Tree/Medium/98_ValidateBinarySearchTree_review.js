/**
 * Created by lizhelin on 18/8/25.
 */
// butter solution
var isValidBST = function(root) {
  var arr = [];
  arr = helper(root, arr);
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= arr[i + 1]) return false;
  }
  return true
};

var helper = function(node, arr){
  if(node === null) return arr;
  helper(node.left, arr);
  arr.push(node.val);
  helper(node.right, arr);
  return arr;
}