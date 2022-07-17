/**
 *
 * 문제 : Given a non-empty array of integers, return the result of multiplying the values together in order.
 *        (비어 있지 않은 정수 배열이 주어지면 값을 순서대로 곱한 결과를 반환합니다.)
 * 
 *
 * 예시 : [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
 */

function grow(x){
  let result = 1;
  x.map(function(a,i) {
    result *= x[i]
  })
  return result;
}

console.log(grow([4, 1, 1, 1, 4]));
