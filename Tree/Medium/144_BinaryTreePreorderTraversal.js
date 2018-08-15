/**
 * Created by lizhelin on 18/8/14.
 */
//Recursive
var preorderTraversal = function(root) {
  var res = [];
  res = helper(root, res);
  return res;
};

var helper = function(node, res){
  if(node === null) return res;
  res.push(node.val);
  helper(node.left, res);
  helper(node.right, res);
  return res;
};

//iteratively
var preorderTraversal = function(root) {
  var arr = [];
  var res = [];

  var cur = root;
  while(cur !== null) {
    res.push(cur.val);
    if(cur.right !== null) arr.push(cur.right);
    cur = cur.left;
    if(cur === null && arr.length > 0) cur = arr.pop();
  }
  return res;
};