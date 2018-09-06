/**
 * Created by lizhelin on 18/9/5.
 */
var map;
var Logger = function() {
  map = [];
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
 If this method returns false, the message will not be printed.
 The timestamp is in seconds granularity.
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if(map[message] !== undefined){
    if(timestamp - map[message] < 10) return false;
  }
  map[message] = timestamp;
  return true;
};
