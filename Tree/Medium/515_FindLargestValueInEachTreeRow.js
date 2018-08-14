/**
 * Created by lizhelin on 18/8/13.
 */
var res;
var largestValues = function(root) {
  res = [];
  if(root === null) return res;
  res.push(root.val);
  helper(root, 0, res);
  return res;
};

var helper = function(node, h, arr) {
  if(node === null) return;
  if(h + 1 <= arr.length) {
    if(node.val > arr[h]) arr[h] = node.val;
  }
  else {
    arr.push(node.val);
  }
  helper(node.left, h + 1, arr);
  helper(node.right, h + 1, arr);
};