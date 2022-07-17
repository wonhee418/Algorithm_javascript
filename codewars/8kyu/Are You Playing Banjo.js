/**
 *
 * 문제 : Create a function which answers the question "Are you playing banjo?".
 *        If your name starts with the letter "R" or lower case "r", you are playing banjo!
 *        ("밴조를 연주하고 있습니까?"라는 질문에 답하는 함수를 만듭니다.
 *          이름이 문자 "R" 또는 소문자 "r"로 시작하면 밴조를 연주하는 것입니다!)
 *
 *         이 함수는 이름을 유일한 인수로 사용하고 다음 문자열 중 하나를 반환합니다.
 *         예시 :
 *         name + " plays banjo" 
 *         name + " does not play banjo"
 * 
 */

function areYouPlayingBanjo(name) {
  let arr = name.split('')
  
  if(arr[0] == 'r' || arr[0] == 'R'){
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Ringo"));
