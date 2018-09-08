/**
 * Created by lizhelin on 18/9/8.
 */
var numComponents = function(head, G) {
  var res = 0;
  var map = {};
  var val;
  for(var i = 0; i < G.length; i++) {
    map[G[i]] = i;
  }
  var cur = head;
  while(cur !== null) {
    val = cur.val;
    if(map[val] !== undefined){
      res++;
      while(cur.next !== null && map[val] !== undefined) {
        cur = cur.next;
        val = cur.val;
      }
    }
    if(cur !== null) cur = cur.next;
  }
  return res;
};