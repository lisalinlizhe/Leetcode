/**
 * Created by lizhelin on 18/9/8.
 */
var findTarget = function(root, k) {
  return helper(root, {}, k);
};

var helper = function(node, map, k){
  if(node === null) return false;
  if(map[node.val] === true) return true;
  map[k - node.val] = true;
  return helper(node.left, map, k) || helper(node.right, map, k);
};