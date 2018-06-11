/**
 * Created by lizhelin on 18/6/10.
 */
var hasCycle = function(head) {
  var node1 = head;
  var node2 = head;
  while(node2 !== null && node2.next !== null) {
    node1 = node1.next;
    node2 = node2.next.next;
    if(node1 === node2) return true;

  }
  return false;
};