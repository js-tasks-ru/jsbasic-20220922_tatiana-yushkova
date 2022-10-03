function checkSpam(str) {
  // ваш код...
  let strUpper = str.toUpperCase();

  let str1 = "1xBet";
  let str2 = "XXX";

  if (~strUpper.indexOf(str1.toUpperCase()) || ~strUpper.indexOf(str2.toUpperCase())) {
    return true;
  } else return false;
}
