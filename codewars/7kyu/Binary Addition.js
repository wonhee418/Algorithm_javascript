/**
 *
 * 문제 : Implement a function that adds two numbers together and returns their sum in binary.
 *        The conversion can be done before, or after the addition.
          The binary number returned should be a string.
 *        (두 숫자를 더하고 그 합을 이진수로 반환하는 함수를 구현하십시오. 변환은 추가 전이나 후에 수행할 수 있습니다.
          반환된 이진수는 문자열이어야 합니다. )
 * 
 * 예시 : (입력1, 입력2 --> 출력(설명)))
          1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
          5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

 */
function addBinary(a,b) {
  // toString() 메서드를 이용하여 더한 수를 2진법으로 변환.
  return (a + b).toString(2)
}


console.log(addBinary(5,9));
