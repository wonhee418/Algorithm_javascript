/**
 *
 * 문제 : Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
 *        (주어진 세 점수의 평균값을 구하고 결과값에 해당되는 등급을 반환하세요)
 * 
 * 
 *
 * 예시 : Numerical Score	         Letter Grade
          90 <= score <= 100	         'A'
          80 <= score < 90	           'B'
          70 <= score < 80	           'C'
          60 <= score < 70	           'D'
          0 <= score < 60	             'F'

 */
function getGrade(s1,s2,s3){

  let avg = Math.floor((s1+s2+s3)/3)
    if( 90 <= avg <= 100){
      return "A"
    }
    if (80 <= avg < 90){
      return "B"
    }
    if (70 <= avg < 80){
      return "C"
    }
    if (60 <= avg < 70){
      return "D"
    } else{
      return "F"
    }
}




console.log(getGrade(70,70,100));
