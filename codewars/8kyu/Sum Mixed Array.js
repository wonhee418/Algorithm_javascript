/**
 *
 * 문제 : Given an array of integers as strings and numbers,
 *        return the sum of the array values as if all were numbers.
 *         Return your answer as a number.
 *        (문자열과 숫자로 이루어진 정수 배열의 값을 모두 더한 값을 number형으로 반환하세요)
 *
 */

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += parseInt(x[i]);
  }
  return sum;
}

console.log(sumMix([9, 3, "7", "3"]));
