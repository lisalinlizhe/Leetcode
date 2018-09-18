/**
 * Created by lizhelin on 18/9/17.
 */
var findSecretWord = function(wordlist, master) {
  wordlist.sort();
  lst = [];
  for (let i = 0; i < wordlist.length; ++i)
    lst.push(wordlist[i]);
  for (var i = 0; i < 10; ++i) {
    var r = master.guess(lst[0]);
    if (r == 6) return;
    newList = [];
    for (var j = 1; j < lst.length; ++j) {
      var ct = 0;
      for (var k = 0; k < 6; ++k) {
        if (lst[j].charAt(k) == lst[0].charAt(k)) {
          ct ++;
        }
      }
      if (ct == r) {
        newList.push(lst[j]);
      }
    }
    lst = newList;
  }
};