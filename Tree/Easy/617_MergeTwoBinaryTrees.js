/**
 * Created by lizhelin on 18/6/19.
 */
var mergeTrees = function(t1, t2) {
  if(t1 === null) return t2;
  if(t2 === null) return t1;
  var res = new TreeNode(0);
  res.val = t1.val + t2.val;
  res.left = mergeTrees(t1.left, t2.left);
  res.right = mergeTrees(t1.right, t2.right);
  return res;
};