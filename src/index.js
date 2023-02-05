module.exports = function check(str, bracketsConfig) {
  let prevLength = str.length;
  bracketsConfig.forEach(element => {
    str = str.replace(element[0]+element[1],'')
  }); 
  while (str.length!=prevLength) {
    prevLength = str.length;
    bracketsConfig.forEach(element => {
      str = str.replace(element[0]+element[1],'')
    }); 
  }
  if (str.length === 0) return true;
  return false;
}
