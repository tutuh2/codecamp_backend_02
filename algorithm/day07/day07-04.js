function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 더 적은 계산 버전!
//위에꺼보다 절반정도 계산을 덜함!
function solution2(n) {
  var answer = n;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

//

function solution3(n) {
  const answer = new Araay(n).fill(1).reduce((acc, cur, i) => {
    return n % (cur + i) === 0 ? acc + (cur + i) : acc;
  }, 0);
  return answer;
}
