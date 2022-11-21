/**
 *
 * 문제 : Complete the solution so that it reverses the string passed into it.
 *        (주어진 문자열을 뒤집는 솔루션을 완성하세요)
 * 
 * 예시 : 'world'  =>  'dlrow'
 *        'word'   =>  'drow'
 *          
 * 
 */
function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution("hello world"));