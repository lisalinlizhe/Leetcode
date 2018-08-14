/**
 * Created by lizhelin on 18/8/13.
 */
//Recursive
var res;
var inorderTraversal = function(root) {
  res = [];
  helper(root);
  return res;
};

var helper = function(node){
  if(node === null) return;
  helper(node.left);
  res.push(node.val);
  helper(node.right);
};

//follow up: iteratively
var inorderTraversal = function(root) {
  var res = [];
  var arr = [];
  var cur = root;
  while(cur !== null || arr.length !== 0) {
    while(cur !== null) {
      arr.push(cur);
      cur = cur.left;
    }
    if(arr.length!=0) {
      cur = arr.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};