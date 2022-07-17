/**
 *
 * 문제 : Make a program that filters a list of strings and returns a list with only your friends name in it.
 *       If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise,
 *       you can be sure he's not...
 *       (문자열 목록을 필터링하고 친구 이름만 포함된 목록을 반환하는 프로그램을 만드십시오.
 *       이름에 정확히 4개의 글자가 포함되어 있으면 친구가 될 것입니다!
 *       그렇지 않으면 친구가 아닙니다.)
 *
 * 예시 : Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 *
 *       i.e.
 *       (즉)
 *       friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
 *
 *       Note: keep the original order of the names in the output.
 *       (참고: 출력에서 ​​이름의 원래 순서를 유지하십시오.)
 */

 function friend(friends){
  //친구로 담을 배열을 생성
  let result = [];
  
  //주어진 배열의 길이만큼 for문을 실행
  for(let i = 0; i< friends.length; i++){
    //배열의 첫번쨰 친구부터 이름을 확인하여 이름이 4글자라면
    if(friends[i].length == 4){
      //친구배열에 추가
      result.push(friends[i])
    }
  }
  return result;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));