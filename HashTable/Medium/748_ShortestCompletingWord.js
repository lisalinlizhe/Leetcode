/**
 * Created by lizhelin on 18/8/28.
 */
var shortestCompletingWord = function(licensePlate, words) {
  var map = {};
  var plate = "";
  for(var j = 0; j < licensePlate.length; j++) {
    if(licensePlate[j] >= 'a' && licensePlate[j] <= 'z' || licensePlate[j] >= 'A' && licensePlate[j] <= 'Z') {
      plate += licensePlate[j].toLowerCase();
    }
  }
  for(var i = 0; i < words.length; i++) {
    if(helper(plate, words[i])) {
      if(map[words[i].length]) map[words[i].length].push(words[i]);
      else {
        var arr = [];
        arr.push(words[i])
        map[words[i].length] = arr;
      }
    }
  }

  var keys = Object.keys(map);
  return map[keys[0]].shift();
};

var helper = function(plate, word){
  var l1 = plate.length;
  var l2 = word.length;
  var arr = new Array(26).fill(0);
  for(var m = 0; m < Math.max(l1, l2); m++){
    if(m < l1) {
      var idx = plate[m].toLowerCase().charCodeAt(0) - 97;
      arr[idx]++;
    }
    if(m < l2) {
      var idx1 = word[m].toLowerCase().charCodeAt(0) - 97;
      arr[idx1]--;
    }
  }
  for(var k = 0 ; k < 26; k++) {
    if(arr[k] > 0) return false;
  }
  return true;
};