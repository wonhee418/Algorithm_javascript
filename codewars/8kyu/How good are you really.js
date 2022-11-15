/**
 *
 * 문제 : There was a test in your class and you passed it. Congratulations!
 *        But you're an ambitious person. You want to know if you're better than the average student in your class.
 *        (당신은 반에서 있던 시험에 통과했습니다.
 *        하지만 당신은 야심 찬 사람입니다. 당신은 당신이 같은 반의 평균 학생보다 나은지 알고싶습니다.)
 *        
 *        You receive an array with your peers' test scores. Now calculate the average and compare your score!
 *        (동료의 테스트 점수가 포함된 배열을 받습니다. 평균을 계산하고 점수를 비교하세요!)
 * 
 *        Return True if you're better, else False!
 *        (당신이 더 나은 경우 True 반환 , 그렇지 않으면 False!)
 * 
 * 
 * Note : Your points are not included in the array of your class's points.
 *        For calculating the average point you may add your point to the given array!
 *        (귀하의 포인트는 클래스 포인트 배열에 포함되지 않습니다.
 *         평균 점수를 계산하기 위해 주어진 배열에 점수를 추가할 수 있습니다!)
 *
 */

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((p, s) => p + s) / classPoints.length + 1 > yourPoints ? false : true;
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
