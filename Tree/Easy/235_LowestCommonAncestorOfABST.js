/**
 * Created by lizhelin on 18/6/24.
 */
var lowestCommonAncestor = function(root, p, q) {
  if(root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  else if(root.val < p.val && root.val < q.val){
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};