/**
 * Created by llin on 6/8/18.
 */
var findRestaurant = function(list1, list2) {
    var longerList = list1.length > list2.length ? list1 : list2;
    var shorterList = list1.length <= list2.length ? list1 : list2;
    var res = list1.length + list2.length;
    var restaurant = [];
    for(var i = 0; i < shorterList.length; i++) {
        var item = shorterList[i];
        var index = longerList.indexOf(item);
        if(index !== -1 && i + index <= res){
            if(i + index < res){
                restaurant = [];
            }
            restaurant.push(item);
            res = i + index;
        }
    }
    return restaurant;
};