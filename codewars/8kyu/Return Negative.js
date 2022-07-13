/**
 *
 * 문제 : In this simple assignment you are given a number and have to make it negative.
 *        But maybe the number is already negative?
 *        (주어진 숫자를 음수로 변환합니다. )
 * 
 * 
 * Note : The number can be negative already, in which case no change is required.
 *        (주어진 수가 이미 음수라면 변환할 필요가 없습니다.)
          Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
 *        (음수 0은 수학적 의미가 없습니다.)
 *
 * 예시 : makeNegative(1);    // return -1
 *        makeNegative(-5);   // return -5
 *        makeNegative(0);    // return 0
 *        makeNegative(0.12); // return -0.12
 */

function makeNegative(num) {
  // Code?
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(makeNegative(1));
