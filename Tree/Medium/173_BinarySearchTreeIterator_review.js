/**
 * Created by lizhelin on 18/8/16.
 */
var BSTIterator = function(root) {
  this.stack = [];
  this.add(root);
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== 0;
};

BSTIterator.prototype.add = function(node) {
  var cur = node;
  while(cur) {
    this.stack.push(cur);
    cur = cur.left;
  }
}

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  var node = this.stack.pop();
  this.add(node.right);
  return node.val;
}; 