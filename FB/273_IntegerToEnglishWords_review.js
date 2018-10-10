/**
 * Created by lizhelin on 18/10/9.
 */
var lessThanTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
var tems = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
var thousands = ["", "Thousand", "Million", "Billion"];

var numberToWords = function(num) {
  if(num === 0) return 'Zero';
  var res = "";
  var idx = 0;

  while(num > 0) {
    if(num % 1000 !== 0){
      res = getUnit(num % 1000) + thousands[idx] + " " + res;
    }
    num = parseInt(num/1000);
    idx++;
  }

  return res.trim();
};

var getUnit = function(num){
  if(num === 0) return "";
  else if(num < 20) return lessThanTwenty[num] + ' ';
  else if(num < 100) return tems[parseInt(num/10)] + ' ' + getUnit(num % 10);
  else return lessThanTwenty[parseInt(num / 100)] + ' Hundred ' + getUnit(num % 100);
}