/**
 *
 * 문제 : Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 *        문자열이 주어지면 각 문자(대소문자 구분)가 한 번 반복되는 문자열을 반환해야 합니다.
 * 
 * 예시 : * "String"      -> "SSttrriinngg"
 *          "Hello World" -> "HHeelllloo  WWoorrlldd"
 *          "1234!_ "     -> "11223344!!__  "
 * 
 */
function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charAt(i) + str.charAt(i)
  }
  return result;
}

console.log(doubleChar("String"));