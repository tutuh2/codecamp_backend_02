function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    let nString = n.toString();
    console.log(nString)
    for( let i =0; i< nString.length; i++){
        answer += nString[i]*1;
    }
    
    return answer;
}

console.log(solution(444));