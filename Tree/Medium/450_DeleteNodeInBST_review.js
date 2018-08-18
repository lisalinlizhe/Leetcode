/**
 * Created by lizhelin on 18/8/18.
 */

/**
 * Steps:
  Recursively find the node that has the same value as the key, while setting the left/right nodes equal to the returned subtree
  Once the node is found, have to handle the below 4 cases
 1.node doesn't have left or right - return null
 2.node only has left subtree- return the left subtree
 3.node only has right subtree- return the right subtree
 4.node has both left and right - find the minimum value in the right subtree, set that value to the currently found
   node, then recursively delete the minimum value in the right subtree

 **/
 var deleteNode = function(root, key) {
  if(root === null) return null;
  if(root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  else if(root.val > key) {
    root.left = deleteNode(root.left, key);
  }
  else {
    if(root.left === null) return root.right;
    else if(root.right === null) return root.left;

    var minNode = helper(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, root.val);
  }
  return root;
};

var helper = function(node){
  while(node.left !== null) node = node.left;
  return node;
};