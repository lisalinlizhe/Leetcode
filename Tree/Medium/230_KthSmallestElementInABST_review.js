/**
 * Created by lizhelin on 18/8/15.
 */
//可以不用走完所有的recursion.
var count, number;
var kthSmallest = function(root, k) {
  var arr = [];
  count = k;
  helper(root, arr);
  return arr[k - 1];
};

var helper = function(node, arr){
  if(node === null) return arr;
  helper(node.left, arr);
  count--;
  if(count === 0) {
    number = node.val;
    return;
  }
  arr.push(node.val);
  helper(node.right, arr);
};

//二分查找！！
var kthSmallest = function(root, k) {
  var count = helper(root.left);
  if(k <= count) {
    return kthSmallest(root.left, k);
  }
  else if(k > count + 1) {
    return kthSmallest(root.right, k - count - 1)
  }
  return root.val;
};

var helper = function(node){
  if(node === null) return 0;
  return 1 + helper(node.left) + helper(node.right);
};