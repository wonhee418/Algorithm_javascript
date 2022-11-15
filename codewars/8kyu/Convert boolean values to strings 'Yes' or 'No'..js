/**
 *
 * 문제 : Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 *        (주어지는 boolean값이 ture 라면 "Yes"의 문자열을, false 라면 "No" 의 문자열을 출력하는 메소드를 완성시키세요)
 *
 */

function boolToWord(bool) {
  return bool === true ? "Yes" : "No"
}

console.log(boolToWord(true));
