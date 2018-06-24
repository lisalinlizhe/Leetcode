/**
 * Created by lizhelin on 18/6/24.
 */
var nodeSum;
var hasPathSum = function(root, sum) {
  if(root === null) return false;
  nodeSum = [];
  add(root, 0);
  return nodeSum.indexOf(sum) !== -1;
};

var add = function(node,temp){
  if(node.left === null && node.right === null) nodeSum.push(temp + node.val);
  if(node.left !== null) add(node.left, temp + node.val);
  if(node.right !== null) add(node.right, temp + node.val);

};