/**
 * Created by lizhelin on 18/8/18.
 */
var res;
var pathSum = function(root, sum) {
  return helper(root, sum);
};

var helper = function(node, sum){
  if(node === null) return [];
  if(node.val === sum && node.left === null && node.right === null) return [[node.val]];

  var leftPaths = helper(node.left, sum - node.val);
  console.log(leftPaths);
  for(var i = 0; i < leftPaths.length; i++) {
    leftPaths[i].unshift(node.val);
  }

  var rightPaths = helper(node.right, sum - node.val);
  for(var i = 0; i < rightPaths.length; i++) {
    rightPaths[i].unshift(node.val);
  }

  return leftPaths.concat(rightPaths)
};