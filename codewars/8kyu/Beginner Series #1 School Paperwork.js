/**
 *
 * 문제 : Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
          Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
 *        (반 친구들이 당신에게 몇 가지 서류를 복사해 달라고 부탁했습니다. 당신은 'n' 급우가 있고 서류에는 'm' 페이지가 있다는 것을 알고 있습니다.
          당신의 임무는 얼마나 많은 빈 페이지가 필요한지 계산하는 것입니다. 경우 n < 0또는 m < 0반환 0합니다.)
 * 
 * 
 *
 * 예시 : n= 5, m=5: 25
          n=-5, m=5:  0
 */

function paperwork(n, m) {
  if (m < 0 || n < 0) {
    return 0;
  }
  return m * n;
}

console.log(paperwork(5, 5));
