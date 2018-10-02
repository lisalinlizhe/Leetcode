/**
 * Created by lizhelin on 18/9/5.
 */

var map = {};
var encode = function(longUrl) {
  var time = Date.now.toString();
  map[time] = longUrl;
  return 'http://tinyurl.com/' + time;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  var key = shortUrl.split('com/')[1];
  return map[key];
};