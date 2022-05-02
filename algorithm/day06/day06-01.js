function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // 배열의 이전 요소와 동일한지 확인.
    // 동일한 경우 answer에 push 하지 않음. 동일하지 않은경우 answer에 push.
    let curr = arr[0];
    answer.push(curr);

    for(let i = 1; i < arr.length ; i++){
        if(curr !== arr[i]){
            answer.push(arr[i]);
            curr = arr[i];
        }
    }

    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));