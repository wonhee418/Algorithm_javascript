/**
 *
 * 문제 : Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
 *        (주어진 문자열에서 모든 느낌표를 제거하는 RemoveExclamationMarks 함수를 작성하십시오. )
 * 
 * 
 */
function removeExclamationMarks(s) {
  //정규식을 활용하여 문자열에서 모든 ! 를 제거
  // 정규식 표현 = /!/ -> !가 있는 문자열
  //            =  g -> 전역매칭
  return s.replace(/!/g,'');
}


console.log(removeExclamationMarks("Hello! world!!!"));
