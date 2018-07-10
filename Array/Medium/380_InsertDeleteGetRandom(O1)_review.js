/**
 * Created by lizhelin on 18/7/9.
 */
// needs review: realize it with O(1) -> using hashmap, not indexOf!!!!!!

var RandomizedSet = function() {
  this.arr = [];
  this.map = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map[val] === undefined) {
    this.arr.push(val);
    this.map[val] = this.arr.length - 1;
    return true;
  }
  return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.map[val] !== undefined) {
    var temp = this.arr[this.arr.length - 1];
    var index = this.map[val];
    this.map[temp] = index;
    this.arr[index] = temp;

    this.arr.pop();
    delete this.map[val];
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  var index = Math.floor(Math.random() * (this.arr.length));
  return this.arr[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */