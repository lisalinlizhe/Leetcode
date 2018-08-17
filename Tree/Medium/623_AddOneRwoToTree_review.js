/**
 * Created by lizhelin on 18/8/16.
 */
var addOneRow = function(root, v, d) {
  if(d === 0 || d === 1) {
    var newroot = new TreeNode(v);
    newroot.left = d == 1 ? root : null;
    newroot.right = d == 0 ? root : null;
    return newroot;
  }
  if(root !== null && d >= 2){
    root.left = addOneRow(root.left, v, d > 2 ? d - 1: 1);
    root.right = addOneRow(root.right, v, d > 2 ? d - 1 : 0);
  }
  return root;
};