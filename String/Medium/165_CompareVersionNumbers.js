/**
 * Created by lizhelin on 18/8/5.
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.');
  version2 = version2.split('.');
  var i,j;
  for(i = 0, j = 0; i < version1.length && j < version2.length; i++, j++){
    var c1 = parseInt(version1[i]);
    var c2 = parseInt(version2[j]);
    if(c1 > c2) return 1;
    else if(c1 < c2) return -1;
  }
  if(i < version1.length) {
    while(i < version1.length){
      var char1 = parseInt(version1[i]);
      if(char1 > 0) return 1;
      i++;
    }
  }
  if(j < version2.length ) {
    while(j < version2.length){
      var char2 = parseInt(version2[j]);
      if(char2 > 0) return -1;
      j++;
    }
  }
  return 0;
};