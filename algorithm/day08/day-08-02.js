function solution(x, n) {
    var answer = [];
    let curr = 0;
    for( let i =0 ; i <n ; i++){
        curr +=  x;
        answer.push(curr);
    }
    return answer;
}
///////////////////////////////////////////////
function solution2(x, n) {
    const answer = new Array(n).fill(1) // 1로 채워주기
                                .map((el, i) =>{ // el과 i로 요소와 인덱스넘버 받아오기
                                    return (el+i)*x; // el+i와 x를 곱해 차이
                                })
    return answer;
}

