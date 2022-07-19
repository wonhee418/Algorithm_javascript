/**
 *
 * 문제 : Write a function to split a string and convert it into an array of words.
 *        (주어진 문자열을 단어 배열로 변환하는 함수를 작성하십시오 )
 * 
 * 예시 : "Robin Singh" ==> ["Robin", "Singh"]
          "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
 */
function stringToArray(string){
  return string.split(" ")
}


console.log(stringToArray("I love arrays they are my favorite"));
