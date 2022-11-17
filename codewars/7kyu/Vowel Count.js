/**
 *
 * 문제 : Return the number (count) of vowels in the given string.
 *        We will consider a, e, i, o, u as vowels for this Kata (but not y).
 *        The input string will only consist of lower case letters and/or spaces.
 *        (주어진 문자열에서 모음의 개수를 반환합니다.
 *          우리는 모음을 a,e,i,o,u로 간주할 것입니다.(단, y는 아님)
 *          입력 문자열은 소문자 및 /또는 공백으로만 구성됩니다.)
 *
 */
function getCount(str) {
  const vowelArr = str.match(/[a,e,i,o,u]/gi)
  return vowelArr === null ? 0 : vowelArr.length
}


console.log(getCount("my pyx"));
