/**
 * Created by lizhelin on 18/8/18.
 */
var serialize = function(root) {
  var s = '';
  if(root === null) return null;

  var st = [];
  st.push(root);
  while(st.length >= 1) {
    root = st.pop();
    s = s + root.val + ',';
    if(root.right !== null) st.push(root.right);
    if(root.left !== null) st.push(root.left);
  }
  return s;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(data === null || data.length === 0) return null;
  var strs = data.split(',') ;
  var q = [];
  for(var i = 0; i < strs.length - 1; i++) {
    q.push(parseInt(strs[i]));
  }
  return helper(q);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

var helper = function(q){
  if(q.length === 0) return null;
  var root = new TreeNode(q.shift());
  var smallerQueue = [];
  while(q.length >= 0 && q[0] < root.val) {
    smallerQueue.push(q.shift());
  }
  root.left = helper(smallerQueue);
  root.right = helper(q);
  return root;
};