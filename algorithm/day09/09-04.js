function solution(arr, divisor) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%divisor === 0){
            answer.push(arr[i]);
        }
    }
    
    if(answer.length === 0){
        answer.push(-1);
    }
    
    answer.sort(function(a, b) {
        return a - b;
    });
    return answer;
}

// 필터를 사용하는 방식
function solution2(arr, divisor) {
    const answer = arr.filter( num => {
        return num % divisor ===0
    });
    console.log(answer);

    return answer.length === 0
        ? [-1]
        : answer.sort((a,b)=>a-b)
}