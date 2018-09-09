/**
 * Created by lizhelin on 18/9/9.
 */
var deleteNode = function(node){
  node.val = node.next.val;
  node.next = node.next.next;
};