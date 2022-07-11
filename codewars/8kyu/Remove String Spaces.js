/**
 *
 * 문제 : Simple, remove the spaces from the string, then return the resultant string.
 *        (간단하게 문자열에서 공백을 제거한 다음 결과 문자열을 반환합니다.)
 *
 */

function noSpace(x) {
  return x.trim().replace(/ /g, "");
}

console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
