/**
 * Created by lizhelin on 18/6/10.
 */
//没太搞懂节点的指针问题？？？？？？（check previous submission, find why it's failling）
var isPalindrome = function(head) {
  var slow = head;
  var fast = head;
  while(fast !== null && fast.next !== null){
    fast = fast.next.next;
    slow = slow.next;
  }
  slow = reverseList(slow);
  console.log(head);
  fast = head;
  while (slow != null) {
    if (fast.val != slow.val) {
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};

var reverseList = function(head) {
  var newNode = null;
  while(head !== null) {
    var temp = head.next;
    head.next = newNode;
    newNode = head;
    head = temp;
  }
  return newNode;
}