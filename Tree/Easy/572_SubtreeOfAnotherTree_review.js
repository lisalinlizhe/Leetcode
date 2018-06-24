/**
 * Created by lizhelin on 18/6/24.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isSubtree = function(s, t) {
  if(s === null) return false;
  if(isSameTree(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right,t);
};

var isSameTree = function(s,t) {
  if(s === null && t === null) return true;
  if(s === null || t === null) return false;
  if(s.val !== t.val) return false;
  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
};