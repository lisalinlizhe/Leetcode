/**
 * Created by lizhelin on 18/9/8.
 */
//review follow up: what if we have k arguments?
var i, j;
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  i = 0;
  j = 0;
  this.v1 = v1;
  this.v2 = v2;
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return i < this.v1.length || j < this.v2.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  if(i > j) {
    if(j < this.v2.length) return this.v2[j++];
    else return this.v1[i++];
  }
  else if(i < this.v1.length){
    return this.v1[i++];
  }
  else return this.v2[j++];
};




//************follow up solution:*************
var ZigzagIterator = function ZigzagIterator(v1, v2) {
  this.collection = [];
  if(v1.length !== 0) this.collection.push(v1);
  if(v2.length !== 0) this.collection.push(v2);
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
  return this.collection.length > 0;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
  if(this.collection[0].length === 1) {
    return this.collection.shift()[0];
  }else{
    var temp = this.collection.shift();
    this.collection.push(temp);
    return temp.shift();
  }
};
