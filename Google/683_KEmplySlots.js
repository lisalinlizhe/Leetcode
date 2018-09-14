/**
 * Created by lizhelin on 18/9/12.
 */
var kEmptySlots = function(flowers, k) {
  var arr = new Array(flowers.length).fill(false);
  arr[flowers[0]] = true;
  for(var i = 1; i < flowers.length; i++) {
    var bloomingSlot = parseInt(flowers[i]) ;
    arr[bloomingSlot] = true;
    var count = 1;
    //check before k
    while(count <= k && bloomingSlot + count <= arr.length) {
      if(arr[bloomingSlot + count] === false) count++;
      else break;
    }
    if(count > k && arr[bloomingSlot + k + 1] === true) return i + 1;
    count = 1;
    //check after k
    while(count <= k && bloomingSlot - count >= 0){
      if(arr[bloomingSlot - count] === false) count++;
      else break;
    }
    if(count > k && arr[bloomingSlot - k - 1] === true) return i + 1;
  }
  return -1;
};