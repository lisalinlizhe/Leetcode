/**
 * Created by llin on 8/22/18.
 */
var connect = function(root) {
    var start = root;
    while(start !== null) {
        var cur = start;
        while(cur !== null){
            if(cur.left !==null) cur.left.next = cur.right;
            if(cur.right !== null && cur.next !== null) cur.right.next = cur.next.left;

            cur = cur.next;
        }

        start = start.left;
    }
};