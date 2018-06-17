/**
 * Created by lizhelin on 18/6/17.
 */
var MinStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.splice(0,0,x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  var val = this.stack[0];
  this.stack = this.stack.slice(1, this.stack.length);
  return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  var min = this.stack[0];
  for(var i = 1; i < this.stack.length; i++) {
    if(this.stack[i] < min) min = this.stack[i];
  }
  return min;
};