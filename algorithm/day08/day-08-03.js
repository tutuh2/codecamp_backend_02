function solution(s) {
    var answer = ''
    answer = s.split("").sort().reverse().join('');
    console.log(answer);
    return answer;
}