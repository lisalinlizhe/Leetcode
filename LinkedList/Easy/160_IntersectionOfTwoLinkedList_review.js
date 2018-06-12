/**
 * Created by lizhelin on 18/6/11.
 */
var getIntersectionNode = function(headA, headB) {
  var len1 = getLength(headA);
  var len2 = getLength(headB);
  while(len1 > len2) {
    headA = headA.next;
    len1--;
  }
  while(len1 < len2) {
    headB = headB.next;
    len2--;
  }
  while(headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA;
};

var getLength = function(head){
  var len = 0;
  while(head !== null) {
    head = head.next;
    len++;
  }
  return len;
};