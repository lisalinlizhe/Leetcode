/**
 * Created by lizhelin on 18/9/8.
 */
//Linked list 的题都要看一下.还有基础的reverse也不太熟悉.以及如果定义一个链表
//自己算法太慢

//快速算法：
var plusOne = function(head) {
  if(head === null) return head;
  var arr = populateStack(head);

  var carry = 1;
  while(arr.length > 0) {
    var current = arr.pop();
    var sum = carry + current.val;
    current.val = sum % 10;
    carry = sum === 10 ? 1 : 0;
  }
  if(carry === 1) {
    var newHead = new ListNode(1);
    newHead.next = head;
    head = newHead;
  }
  return head;
};

var populateStack = function(head){
  var stack = [];
  var currentNode = head;
  while(currentNode !== null) {
    stack.push(currentNode);
    currentNode = currentNode.next;
  }
  return stack;
};


//how to define a linked list and how to reverse a linked list:
//defined:
function ListNode(val){
  this.val = val;
  this.next = null;
};

//reverse:
var reverse = function(head){
  if(head === null) return head;
  var newList = null;
  while(head !== null) {
    var temp = head.next;
    head.next = newList;
    newHead = head;
    head = temp;
  }
  return newHead;
};


//自己的：
var plusOne = function(head) {
  var newList = reverse(head);
  var carry = 0;
  var res = newList;
  newList.val += 1;
  while(res !== null) {
    var sum = carry + res.val;
    carry = parseInt(sum/10);
    if(sum >= 10) {
      sum %= 10;
    }
    res.val = sum;
    if(res.next === null && carry === 1){
      res.next = new ListNode(1);
      res = res.next;
    }
    res = res.next;
  }
  return reverse(newList);
};

var reverse = function(head){
  if(head === null) return null;
  var newHead = null;
  while(head !== null) {
    var temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }
  return newHead;
};