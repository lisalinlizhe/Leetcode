/**
 * Created by lizhelin on 18/6/26.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};