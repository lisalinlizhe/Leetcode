/**
 * Created by lizhelin on 18/8/18.
 */
var zigzagLevelOrder = function(root) {
  var res = [];
  helper(root, 0, res);
  return res;
};

var helper = function(node, h, res){
  if(node === null) return ;
  if(h >= res.length) {
    res.push([]);
  }
  if(h % 2 === 0) {
    res[h].push(node.val);
  }else {
    res[h].unshift(node.val);
  }
  helper(node.left, h + 1, res);
  helper(node.right, h + 1, res);
  return res;
};