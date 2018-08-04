/**
 * Created by lizhelin on 18/8/3.
 */

//At first, lets look at the edge cases -
//
//If all digits sorted in descending order, then output is always “Not Possible”. For example, 4321.
//If all digits are sorted in ascending order, then we need to swap last two digits. For example, 1234.
//For other cases, we need to process the number from rightmost side (why? because we need to find the smallest of all greater numbers)
//Now the main algorithm works in following steps -
//
//I) Traverse the given number from rightmost digit, keep traversing till you find a digit which is smaller than the previously traversed digit. For example, if the input number is “534976”, we stop at 4 because 4 is smaller than next digit 9. If we do not find such a digit, then output is “Not Possible”.
//
//II) Now search the right side of above found digit ‘d’ for the smallest digit greater than ‘d’. For “534976″, the right side of 4 contains “976”. The smallest digit greater than 4 is 6.
//
//III) Swap the above found two digits, we get 536974 in above example.
//
//IV) Now sort all digits from position next to ‘d’ to the end of number. The number that we get after sorting is the output. For above example, we sort digits in bold 536974. We get “536479” which is the next greater number for input 534976.


var nextGreaterElement = function(n) {
  n = n.toString().split('');
  var i, j;
  for(i = n.length - 1; i > 0; i--) {
    if(n[i - 1] < n[i]) break;
  }
  if(i=== 0) return -1;

  var x = n[i - 1];
  var smallest = i;

  for(j = i +1; j < n.length; j++) {
    if(n[j] > x && n[j] < n[smallest]) smallest = j;
  }
  var temp = n[i-1];
  n[i-1] =  n[smallest];
  n[smallest] = temp;
  var sub = n.join('').substring(i , n.length + 1).split('');
  sub = sub.sort(function(a,b){return a-b;});

  var res = parseInt(n.join('').substring(0, i) + sub.join(''));
  return res > 2147483647? -1 : res;
};