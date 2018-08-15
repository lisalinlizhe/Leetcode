/**
 * Created by lizhelin on 18/8/15.
 */
//差一点点，如何fill in生成的array
var printTree = function(root) {
  var height = helper(root);
  var row = height;
  var col = Math.pow(2, height) - 1;

  var res = [];
  for(var i = 0; i < row; i++) {
    var arr = new Array(col).fill("");
    res.push(arr);
  }

  print(root, res, 0, row, 0, col - 1);
  return res;
};

var helper = function(node) {
  if(node === null) return 0;
  return Math.max(helper(node.left), helper(node.right)) + 1;
};

var print = function(node, res, row, totalRows, i, j){
  if(row === totalRows || node === null) return ;

  res[row][parseInt((i + j)/2)] = (node.val).toString();
  print(node.left, res, row + 1, totalRows, i, (i+j)/2 - 1);
  print(node.right, res, row + 1, totalRows, (i+j)/2 + 1, j);
};