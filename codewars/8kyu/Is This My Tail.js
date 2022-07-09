/**
 *
 * 문제 : Some new animals have arrived at the zoo.
 *        The zoo keeper is concerned that perhaps the animals do not have the right tails.
 *        To help her, you must correct the broken function to make sure that the second argument (tail),
 *        is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!
 *        (새로운 동물들이 동물원에 도착했습니다. 동물원 사육사는 동물에게 올바른 꼬리가 없는지 걱정합니다.
 *        그녀를 돕기 위해 꺠진 함수를 수정하여 두 번쨰 인수(tail)가 첫 번째 인수(body)의 마지막 문자와 동일한지
 *        확인해야합니다. 그렇지 않으면 꼬리가 맞지 않습니다!
 *        )
 * 
 *        If the tail is right return true, else return false.
 *        (꼬리가 맞으면 true, 그렇지 않으면 false를 반환합니다.)
 *
 *         The arguments will always be non empty strings, and normal letters.
 *        (인수는 항상 비어있지 않은 문자열과 일반 문자입니다.)
 * 
 *
 *  예시 : 
 *      body   	   tail      result
 *   "Fox"	       "x"        true
 *   "Rhino"	     "o"        true
 *   "Meerkat"	   "t"        true
 * 
 */

 function correctTail(body, tail){
  let sub = body.slice(body.length-1);
  return sub == tail ? true : false;
}  

console.log(correctTail("Fox", "x"));