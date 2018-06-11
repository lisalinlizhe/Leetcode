/**
 * Created by lizhelin on 18/6/10.
 */
var mergeTwoLists = function(l1, l2) {
  var temp = new ListNode(0);
  var res = new ListNode(0);
  res.next = temp;
  while(l1 !== null && l2 !== null) {
    if(l1.val < l2.val ) {
      temp.next = l1;
      l1 = l1.next;
    }
    else{
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }
  if(l1 !== null) temp.next = l1;
  else if(l2 !== null) temp.next = l2;
  else temp.next = null;
  return res.next.next;
};