/**
 * Created by lizhelin on 18/6/10.
 */

//1st LinkedList problem, need to recall
function ListNode(val) {
  this.val = val;
  this.next = null;
}


var reverseList = function(head) {
  var newNode = null;
  while(head !== null){
    var temp1 = head.next;
    head.next = newNode;
    newNode = head;
    head = temp1;

  }
  return newNode;
};
