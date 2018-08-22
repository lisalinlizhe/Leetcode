/**
 * Created by llin on 8/22/18.
 */
var connect = function(root) {
    var cur = root;
    var prev = null;
    var head = root;

    while(cur !== null){
        while(cur !== null) {
            if(cur.left !== null) {
                if(prev !== null) prev.next = cur.left;
                else head = cur.left;

                prev = cur.left;
            }
            if(cur.right !== null) {
                if(prev !== null) prev.next = cur.right;
                else head = cur.right;

                prev = cur.right;
            }
            cur = cur.next;
        }
        cur = head;
        head = null;
        prev = null;
    }
};