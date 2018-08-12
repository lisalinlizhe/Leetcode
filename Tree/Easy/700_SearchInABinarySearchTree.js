/**
 * Created by lizhelin on 18/8/12.
 */
var searchBST = function(root, val) {
  if(root === null) return [];
  if(root.val === val) return root;
  if(root.val > val) return searchBST(root.left, val);
  if(root.val < val) return searchBST(root.right, val);
};