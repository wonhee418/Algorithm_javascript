/**
 *
 * 문제 : Write a function that takes an array of numbers and returns the sum of the numbers.
 *        The numbers can be negative or non-integer.
 *        If the array does not contain any numbers then you should return 0.
 *        (주어진 문자열을 단어 배열로 변환하는 함수를 작성하십시오 )
 *
 *
 * 참고 : You can assume that you are only given numbers.
 *        (숫자만 주어진다고 생각할 수 있습니다.)
 *
 *        You cannot assume the size of the array.
 *        (배열의 크기를 가정할 수 없습니다.)
 *
 *        You can assume that you do get an array and if the array is empty, return 0.
 *        (배열을 가져왔다고 가정할 수 있으며 배열이 비어 있으면 0을 반환합니다.)
 *
 *
 * 예시 : Input: [1, 5.2, 4, 0, -1]
 *        Output: 9.2
 *
 *        Input: []
 *        Output: 0
 *
 *        Input: [-2.398]
 *        Output: -2.398
 */
function sum(numbers) {
  // ------------ 2차 풀이 ------------
  // 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
  // 위 reduce 함수를 이용하여 해당문제를 풀이
  // 누적값과 현잿값을 더한값을 리턴한다.
  // 배열이 비어있을 경우에는 초깃값인 0 을 리턴해준다.

  return numbers.reduce((a, b) => a + b, 0);

  // ------------ 1차 풀이 ------------
  // let result = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers.length == 0) {
  //     return 0;
  //   } else {
  //     result += numbers[i];
  //   }
  // }
  // return result;
}

console.log(sum([1, 5.2, 4, 0, -1]));
