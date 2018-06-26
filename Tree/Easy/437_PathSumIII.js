/**
 * Created by lizhelin on 18/6/25.
 */
var res;
var pathSum = function(root, sum) {
  res = 0;
  if(root === null) return 0;
  add(root, sum, 0);
  return res + pathSum(root.left, sum) + pathSum(root.right, sum);
};

var add = function(node, sum, temp) {
  if(node === null) return 0;
  temp += node.val;
  if(temp === sum) res++;
  add(node.left, sum, temp);
  add(node.right, sum, temp);
};