/**
 * Created by lizhelin on 18/7/22.
 */
//没想出来怎么设置重复， 重点注意board[i][j] = word[l]这块.
var exist = function(board, word) {
  var row = board.length;
  var col = board[0].length;
  for(var i = 0; i < row; i++) {
    for(var j = 0; j < col ; j++) {
      if(helper(board, i, j, 0, word)) return true;
    }
  }
  return false;
};

var helper = function(board, i, j, l, word) {
  if(l === word.length) return true;
  if(i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1 || board[i][j] !== word[l]) return false;
  board[i][j] = false;
  var exist = helper(board, i, j + 1, l + 1, word) || helper(board, i, j - 1, l + 1, word ) ||  helper(board, i + 1, j, l + 1, word ) || helper(board, i - 1, j, l + 1, word );
  board[i][j] = word[l];
  return exist;
};