/**
 * Created by lizhelin on 18/6/17.
 */
var calPoints = function(ops) {
  var sum = 0;
  var validPts = [];
  for(var i = 0; i < ops.length; i++) {
    if(ops[i] === '+') {
      ops[i] = parseInt(validPts[validPts.length - 1]) + parseInt(validPts[validPts.length - 2]);
      sum += ops[i];
      validPts.push(ops[i]);
    }else if(ops[i] === 'C'){
      sum -= validPts[validPts.length - 1];
      validPts.pop();
    }else if(ops[i] === 'D'){
      ops[i] = parseInt(validPts[validPts.length - 1]) * 2;
      sum += ops[i];
      validPts.push(ops[i]);
    }else {
      sum += parseInt(ops[i]);
      validPts.push(ops[i]);
    }
  }
  return sum;
};