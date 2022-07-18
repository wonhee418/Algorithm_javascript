/**
 *
 * 문제 : Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 *        (주어진 인수를 짝수는 "Even"을, 홀수는 "Odd"를 반환하십시오)
 * 
 */
 function even_or_odd(number) {
  
  return number % 2 == 0 ? "Even" : "Odd"
  
}


console.log(even_or_odd(2));
