/**
 * Created by lizhelin on 18/8/18.
 */
var findDuplicateSubtrees = function(root) {
  var map = {};
  var res = [];
  helper(root, map, res);
  return res;
};

var helper = function(node, map, res){
  if(node === null) return '#';
  var str = node.val + helper(node.left, map, res) + ',' + helper(node.right, map, res);
  if(map[str] === 1) {
    res.push(node);
    map[str]++;
  }
  else if(map[str] === undefined) map[str] = 1;
  return str;
};