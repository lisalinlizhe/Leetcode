/**
 * Created by lizhelin on 18/6/10.
 */
var removeElements = function(head, val) {
  if(head === null) return null;
  while(head !== null && head.val === val) head = head.next;
  var res = head;
  while(head !=null && head.next !== null) {
    if(head.next.val === val) {
      head.next = head.next.next;
    }
    else head = head.next;
  }
  return res;
};