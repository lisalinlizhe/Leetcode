/**
 * Created by lizhelin on 18/9/26.
 */
var wordsTyping = function(sentence, rows, cols) {
  var s = sentence.join(' ') + ' ';
  var l = s.length;
  var start = 0;
  while(rows > 0) {
    start += cols;
    while(start >= 0 && s[start % l] !== ' ') {
      start--;
    }
    start++;
    rows--;
  }
  return Math.floor(start / l);
};