/**
 * Created by lizhelin on 18/5/9.
 */

//Lisa
var subdomainVisits = function(cpdomains) {
  if(cpdomains.length === 0) return;
  res = [];
  map = {};
  var domain = "";
  for(var i = 0; i < cpdomains.length; i++){
    domain = cpdomains[i];
    visitTime = parseInt(domain.split(" ")[0]);
    domains = domain.split(" ")[1].split(".");
    for(var j = domains.length - 1; j >=0 ; j--) {
      index = j;
      domain = "";
      if(index == domains.length - 1){
        domain = domains[index];
      }
      else {
        while(index < domains.length - 1){
          if(domain === ""){
            domain = domains[index] + "." + domains[index+1];
          }
          else {
            domain = domain + "." + domains[index + 1];
          }
          index++;
        }
      }
      if(map[domain]){
        map[domain] += visitTime;
      }
      else {
        map[domain] = visitTime;
        console.log(map[domain]);
      }
    }
  }
  var item = 0;
  for (var key in map) {
    if (map.hasOwnProperty(key)) {
      res.push(map[key] + " " + key);
    }
  }
  return res;
};


// Tom
// var processCpdomain = (cpdomain, visitsMap) => {
//   const arr = cpdomain.split(' ');
//   const count = parseInt(arr[0], 10);
//   const domainParts = arr[1].split('.')
//
//   let temp = domainParts.pop();
//   if (visitsMap[temp]) {
//     visitsMap[temp] += count;
//   } else {
//     visitsMap[temp] = count;
//   }
//
//   while(domainParts.length > 0) {
//     temp = domainParts.pop() + '.' + temp;
//     if (visitsMap[temp]) {
//       visitsMap[temp] += count;
//     } else {
//       visitsMap[temp] = count;
//     }
//   }
// }
//
// /**
//  * @param {string[]} cpdomains
//  * @return {string[]}
//  */
// var subdomainVisits = function(cpdomains) {
//   var visitsMap = {};
//   for(var i = 0; i < cpdomains.length; i++) {
//     processCpdomain(cpdomains[i], visitsMap);
//   }
//   return Object.keys(visitsMap).map((key) => visitsMap[key] + ' ' + key);
// };