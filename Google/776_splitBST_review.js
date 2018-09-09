/**
 * Created by lizhelin on 18/9/8.
 */
//完全没思路呀
var splitBST = function(root, V) {
  var res = [];
  var sp = new TreeNode(0);
  var bp = new TreeNode(0);
  split(root, V, sp, bp);
  res.push(sp.right);
  res.push(bp.left);
  return res;
};

var split = function(node, v, sp, bp){
  if(node === null) return;
  if(node.val <= v) {
    sp.right = node;
    var right = node.right;
    node.right = null;
    split(right, v, node, bp);
  }
  else {
    bp.left = node;
    var left = node.left;
    node.left = null;
    split(left, v, sp, node);
  }
};