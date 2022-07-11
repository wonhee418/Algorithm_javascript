/**
 *
 * 문제 : You will be given an array a and a value x.
 *        All you need to do is check whether the provided array contains the value.
 *        (배열 a와 값이 들어있는 x가 주어집니다.)
 *
 *        Array can contain numbers or strings. X can be either.
 *         (배열은 숫자나 문자열을 포함할 수 있습니다. x는 둘 중 하나일 수 있습니다.)
 *
 *         Return true if the array contains the value, false if not.
 *        (주어진 값이 배열에 포함되어있다면 true, 그렇지 않다면 false를 반환합니다.)
 *
 *
 */

function check(a, x) {
  return a.includes(x);
}

console.log(check([101, 45, 75, 105, 99, 107], 107));
