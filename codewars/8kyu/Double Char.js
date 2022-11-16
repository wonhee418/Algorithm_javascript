/**
 *
 * 문제 : Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 *        (주어진 문자열에서 모든 느낌표를 제거하는 RemoveExclamationMarks 함수를 작성하십시오. )
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