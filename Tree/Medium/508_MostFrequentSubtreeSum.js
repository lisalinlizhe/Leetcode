/**
 * Created by lizhelin on 18/8/13.
 */
var map, max;
var findFrequentTreeSum = function(root) {
  map = {};
  max = [];
  count = 0;
  helper(root, map);
  var keys = Object.keys(map);
  for(var i = 0; i < keys.length; i++) {
    if(map[keys[i]] === count) max.push(parseInt(keys[i]));
  }
  return max;
};

var helper = function(node, map){
  if(node === null) return 0;
  helper(node.left, map);
  helper(node.right, map);
  if(node.left !== null) node.val += node.left.val;
  if(node.right !== null ) node.val += node.right.val;
  if(map[node.val] !== undefined) {
    map[node.val]++;
    if(map[node.val] > count) count = map[node.val];
  }
  else {
    map[node.val] = 1;
    count = Math.max(count, 1);
  }
};