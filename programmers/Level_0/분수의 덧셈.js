/**
 *
 * 문제 : 첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다.
 *        두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.
 *        
 *        
 * 
 * 제한사항 : 0 <denum1, num1, denum2, num2 < 1,000
 *           
 * 
 */

function solution(num1, num2) {
  return Math.floor(num1 / num2 * 1000);
}

console.log(solution(2, 3));