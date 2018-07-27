/**
 * Created by lizhelin on 18/7/26.
 */
var complexNumberMultiply = function(a, b) {
  var arr1 = a.split('+');
  var arr2 = b.split('+');
  console.log(arr1, arr2);
  var number = parseInt(arr1[0]) * parseInt(arr2[0]) - parseInt(arr1[1]) * parseInt(arr2[1]);
  var complex = parseInt(arr1[0]) * parseInt(arr2[1]) + parseInt(arr1[1]) * parseInt(arr2[0]);
  console.log(number, complex);
  return number + "+" + complex + 'i';

};