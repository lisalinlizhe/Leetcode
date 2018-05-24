/**
 * Created by llin on 5/24/18.
 */
var canPlaceFlowers = function(flowerbed, n) {
    var len = flowerbed.length;
    var canBePut = 0;
    for(var i = 0; i< len; i++){
        if(flowerbed[i] === 0){
            if(i - 1 >= 0 && i+ 1 < len && flowerbed[i-1] !== 1 && flowerbed[i + 1] !== 1){
                canBePut++;
                flowerbed[i] = 1;
            }
            else if(i === 0 && flowerbed[i + 1] !== 1){
                canBePut++;
                flowerbed[i] = 1;
            }
            else if(i === len - 1 && flowerbed[i -1] !== 1){
                canBePut++;
            }
        }
    }
    if(canBePut >= n) return true;
    return false;
};