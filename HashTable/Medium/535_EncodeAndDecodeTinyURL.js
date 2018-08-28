/**
 * Created by lizhelin on 18/8/27.
 */
var map = {}
var encode = function(longUrl) {
  var uniqueKey = Date.now().toString(36);
  map[uniqueKey] = longUrl;
  return 'http://tinyurl.com/' + uniqueKey;
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