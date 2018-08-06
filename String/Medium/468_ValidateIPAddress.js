/**
 * Created by lizhelin on 18/8/5.
 */
var validIPAddress = function(IP) {
  if(isValidIPv4(IP))  return "IPv4";
  else if(isValidIPv6(IP))  return "IPv6";
  else return "Neither";
};

var isValidIPv4 = function(ip){
  if(ip.length < 7 || ip[0] === '.' || ip[ip.length - 1] === '.') return false;
  var tokens = ip.split('.');
  if(tokens.length !== 4) return false;
  for(var i = 0; i < tokens.length; i++){
    if(!validIPv4Token(tokens[i])) return false;
  }
  return true;
};

var validIPv4Token = function(token) {
  if(token.length === 0 || token[0] === '0' && token.length > 1 || parseInt(token) > 255 || parseInt(token) < 0) return false;
  for(var m = 0; m < token.length; m++) {
    if(token[m] < '0' || token[m] > '9') return false;
  }
  return true;
};

var isValidIPv6 = function(ip) {
  if(ip.length < 15 || ip[0] === ':' || ip[ip.length - 1] === ':') return false;
  var tokens = ip.split(':');
  if(tokens.length !== 8) return false;
  for(var j = 0; j < tokens.length; j++) {
    if(!validIPv6Token(tokens[j])) return false;
  }
  return true;
};

var validIPv6Token = function(token) {
  if(token.length > 4 || token.length ==0) return false;
  for(var k = 0; k < token.length;  k++) {
    var c = token[k];
    var isDigit = c >= '0' && c<= '9';
    var isUppercaseAF = c>= 'a' && c<= 'f';
    var isLowerCaseAF = c>= 'A' && c<= 'F';
    if(!(isDigit || isUppercaseAF || isLowerCaseAF))
      return false;
  }
  return true;
};