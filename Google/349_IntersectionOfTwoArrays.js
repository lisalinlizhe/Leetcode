/**
 * Created by lizhelin on 18/9/8.
 */
var intersection = function(nums1, nums2) {
  var map = {};
  var res = [];
  var l1 = nums1.length;
  var l2 = nums2.length;
  if(l1 < l2) {
    var temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }
  for(var i = 0; i < nums1.length; i++) {
    if(map[nums1[i]] === undefined) map[nums1[i]] = true;
  }
  for(var j = 0; j < nums2.length; j++) {
    if(map[nums2[j]] === true){
      map[nums2[j]] = false;
      res.push(nums2[j]);
    }
  }
  return res;
};