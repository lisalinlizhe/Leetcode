/**
 * Created by llin on 6/4/18.
 */
var intersect = function(nums1, nums2) {
    if(nums1.length < nums2.length) {
        var temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    var res = [];
    for(var i = 0 ; i < nums2.length; i++) {
        console.log(nums1, nums2[i], nums1.indexOf(nums2[i]));
        if(nums1.indexOf(nums2[i]) !== -1) {
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return res;
};