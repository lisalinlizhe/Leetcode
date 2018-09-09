/**
 * Created by lizhelin on 18/9/8.
 */
var reverseList = function(head) {
  var newList = null;
  while(head !== null) {
    var temp = head.next;
    head.next = newList;
    newList = head;
    head = temp;
  }
  return newList;
};