/**
 * Created by lizhelin on 18/8/16.
 */
var levelOrder = function(root) {
  var res = [];
  helper(root, 0, res);
  return res;
};

var helper = function(node, h, res) {
  if(node === null) return;
  if(h >= res.length) {
    var arr = [];
    res.push(arr);
  }
  res[h].push(node.val);

  helper(node.left, h + 1, res);
  helper(node.right, h + 1, res);
};