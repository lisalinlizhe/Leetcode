/**
 * Created by lizhelin on 18/6/10.
 */
var deleteDuplicates = function(head) {
  var res = head;
  while(head !== null && head.next !== null) {
    if(head.val === head.next.val) {
      head.next = head.next.next;
    }
    else head = head.next;
  }
  return res;
};