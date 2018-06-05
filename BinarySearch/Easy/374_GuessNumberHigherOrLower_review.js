/**
 * Created by llin on 6/4/18.
 */

// This only supports JAVA version
// BUT the impotand thing is when doing (low + high) / 2, there will be problem of 溢出
// So use 【low + (high - low) / 2】 instead!!!!!!!

// public class Solution extends GuessGame {
//
//     public int guessNumber(int n) {
//     int low = 1;
//     int high = n;
//     while(low <= high) {
//     int mid = low + (high - low) / 2;
//     if(guess(mid) == -1){
//     high = mid - 1;
// }
// else if(guess(mid) == 1) {
//     low = mid + 1;
// }
// else if(guess(mid) == 0) return mid;
// }
// return -1;
// }
// }