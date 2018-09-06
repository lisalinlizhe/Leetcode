/**
 * Created by lizhelin on 18/9/5.
 */
var countBattleships = function(board) {
  var res = 0;
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[0].length; j++) {
      if(board[i][j] === 'X') {
        if(board[i][j+1] !== 'X' && (!board[i+1] || (board[i+1] && board[i+1][j] !== 'X'))) {
          res++;
        }
      }
    }
  }
  return res;
};