/**
 * Created by lizhelin on 18/8/17.
 */
//Check the discussion.
//think step by step. Step 1:
var rob = function(root) {
  if(root === null) return 0;
  var val = 0;

  if(root.left !== null) {
    val += rob(root.left.left) + rob(root.left.right);
  }

  if(root.right !== null) {
    val += rob(root.right.left) + rob(root.right.right);
  }

  return Math.max(val + root.val, rob(root.left) + rob(root.right))
};

//step 2:
var rob = function(root) {
  var res = helper(root);
  return Math.max(res[0], res[1]);
};

var helper = function(root){
  if(root === null) return [0, 0];

  var left = helper(root.left);
  var right = helper(root.right);
  var res = new Array(2).fill(0);

  res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  res[1] = root.val + left[0] + right[0];
  return res;
};