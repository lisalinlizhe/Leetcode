/**
 * Created by lizhelin on 18/6/23.
 */
var res;
var levelOrderBottom = function(root) {
  res = [];
  if(root === null) return [];
  res = helper(root, 0);
  return res.reverse();
};

var helper = function(node, index) {
  if(node === null) return;
  if (res[index] !== undefined) {
    res[index].push(node.val);
  }else {
    res[index] = [];
    res[index].push(node.val);
  }
  helper(node.left, index+1);
  helper(node.right, index+1);
  index++;
  return res;
};