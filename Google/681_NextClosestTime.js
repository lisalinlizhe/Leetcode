/**
 * Created by lizhelin on 18/9/11.
 */
var nextClosestTime = function(time) {
  var num1 = time.split(':')[0].split('');
  var num2 = time.split(':')[1].split('');

  var nums = num1.concat(num2).join('').split('');
  nums.sort(function(a,b){return a - b;});

  //last digit
  for(var i = 1; i <= 5; i++){
    if(i === 3) continue;
    var idx = nums.lastIndexOf(time[time.length - i]);
    if(i === 1){
      //last digit
      if(idx < nums.length - 1) return time.slice(0, time.length - 1) + nums[idx + 1];
      else {
        time = time.substring(0, time.length - 1) + nums[0] + time.substring(time.length);
        continue;
      }
    }
    else if (i === 2){
      var cur = idx
      while(cur < nums.length - 1){
        var newMinutes = parseInt(nums[cur + 1]) * 10 + parseInt(time.slice(time.length - 1, time.length));
        if(newMinutes < 60 && newMinutes > parseInt(num2.join(''))) {
          return time.slice(0, time.length - 2) + newMinutes;
        }
        cur++;
      }
      time = time.substring(0, time.length - 2) + nums[0] + time.substring(time.length - 1);
      continue;

    }
    else if(i === 4){
      var cur = idx;
      while(cur < nums.length - 1){
        var newHour = parseInt(num1[0]) * 10 + parseInt(nums[cur + 1]);
        if(newHour < 24 && newHour > parseInt(num1.join(''))) {
          if(newHour < 10) {
            newHour = '0' + newHour;
          }
          return newHour + time.slice(2,time.length);
        }
        if(newHour > 24) break;
        cur++;
      }
      time = time.substring(0, 1) + nums[0] + time.substring(2);
      continue;
    }
    else{
      return nums[0] + time.substring(1);
    }

  }
};