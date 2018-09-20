/**
 * Created by lizhelin on 18/9/19.
 */
var minTransfers = function(transactions) {
  var map = {};
  var res = 0;
  var debts = [];
  for(var i = 0 ; i < transactions.length; i++){
    var transaction = transactions[i];
    var person1 = transaction[0];
    var person2 = transaction[1];
    var amount = transaction[2];
    if(map[person1] !== undefined) map[person1] += amount;
    else map[person1] = amount;
    if(map[person2] !== undefined) map[person2] -= amount;
    else map[person2] = 0 - amount;
  }

  var keys = Object.keys(map);
  for(var j = 0; j < keys.length; j++){
    debts[j] = map[keys[j]];
  }
  return minTransfersFrom(debts, 0);

};

var minTransfersFrom = function(debts, curId){
  while (curId < debts.length && debts[curId] == 0) {
    curId++;
  }

  if (curId == debts.length) {
    return 0;
  }

  var minimumTransfers = Number.POSITIVE_INFINITY;

  for (var i = curId + 1; i < debts.length; i++) {
    if (debts[i] * debts[curId] < 0) {
      debts[i] += debts[curId];
      minimumTransfers = Math.min(minimumTransfers, 1 + minTransfersFrom(debts, curId + 1));
      debts[i] -= debts[curId];
    }
  }

  return minimumTransfers;
}