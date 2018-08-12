/**
 * Created by lizhelin on 18/8/12.
 */
var leafSimilar = function(root1, root2) {
  var leaf1 = [];
  var leaf2 = [];
  getLeaf(root1, leaf1);
  getLeaf(root2, leaf2);
  return JSON.stringify(leaf1) === JSON.stringify(leaf2)
};

var getLeaf = function(node, arr) {
  if(node === null) return;
  if(node.left === null && node.right === null) arr.push(node.val);
  getLeaf(node.left, arr);
  getLeaf(node.right, arr);
};