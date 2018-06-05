/**
 * Created by llin on 6/4/18.
 */
var intersection = function(nums1, nums2) {
    var res = [];
    if(nums1.length <  nums2.length){
        var temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    for(var i = 0 ; i < nums2.length; i++) {
        var temp = nums2[i];
        if(nums1.indexOf(temp) !== -1 && res.indexOf(temp) === -1) {
            res.push(nums2[i]);
        }
    }
    return res;
};