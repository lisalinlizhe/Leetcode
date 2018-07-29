/**
 * Created by lizhelin on 18/7/29.
 */
var intToRoman = function(num) {
  var res = "";
  while(num > 0) {
    var temp;
    if(num >= 1000) {
      temp = parseInt(num / 1000);
      for(var i = 0; i < temp; i++) {
        res += 'M';
      }
      num = num % 1000;
    }
    if(num >= 900) {
      temp = parseInt(num / 900);
      for(var i = 0; i < temp; i++) {
        res = res.substring(0, res.length) + 'CM'
      }
      num = num % 900;
    }
    if(num >= 500) {
      temp = parseInt(num / 500);
      for(var i = 0; i < temp; i++) {
        res += 'D';
      }
      num = num % 500;
    }
    if(num >= 400) {
      temp = parseInt(num / 400);
      for(var i = 0; i < temp; i++) {
        res = res.substring(0, res.length) + 'CD'
      }
      num = num % 400;
    }
    if(num >= 100) {
      temp = parseInt(num / 100);
      for(var i = 0; i < temp; i++) {
        res += 'C';
      }
      num = num % 100;
    }
    if(num >= 90) {
      temp = parseInt(num / 90);
      for(var i = 0; i < temp; i++) {
        res = res.substring(0, res.length) + 'XC'
      }
      num = num % 90;
    }
    if(num >= 50) {
      temp = parseInt(num / 50);
      for(var i = 0; i < temp; i++) {
        res += 'L';
      }
      num = num % 50;
    }
    if(num >= 40) {
      temp = parseInt(num / 40);
      for(var i = 0; i < temp; i++) {
        res = res.substring(0, res.length) + 'XL'
      }
      num = num % 40;
    }
    if(num >= 10) {
      temp = parseInt(num / 10);
      for(var i = 0; i < temp; i++) {
        res += 'X';
      }
      num = num % 10;
    }
    if(num >= 9) {
      temp = parseInt(num / 9);
      for(var i = 0; i < temp; i++) {
        res = res.substring(0, res.length) + 'IX'
      }
      num = num % 9;
    }
    if(num >= 5) {
      temp = parseInt(num / 5);
      for(var i = 0; i < temp; i++) {
        res += 'V';
      }
      num = num % 5;
    }
    if(num >= 4) {
      temp = parseInt(num / 4);
      for(var i = 0; i < temp; i++) {
        res = res.substring(0, res.length) + 'IV'
      }
      num = num % 4;
    }
    if(num >= 1) {
      temp = parseInt(num / 1);
      for(var i = 0; i < temp; i++) {
        res += 'I';
      }
      num = num % 1;
    }
  }
  return res;
};