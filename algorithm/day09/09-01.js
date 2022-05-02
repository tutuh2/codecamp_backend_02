function solution(s){
    var answer = true;
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    let str1 = s.toLowerCase();
    let countP = 0;
    let countY = 0;
    for(let i = 0; i<str1.length ; i++){
        if(str1[i] === "p") {
            countP++;
        }

        if(str1[i] === "y"){
            countY++;
        }
    }
    
    console.log(str1)

    if(countP === 0 && countY ===0){
        answer = true;
    } else if (countP === countY) {
        answer = true;
    } else {
        answer = false;
    }

    return answer;
}


// 강사님 풀이
function solution2(s){
    const check = {};
    s= s.toLowerCase()
        .split("")
        .forEach( str => {
            check[ str ] === undefined
                ? check [ str ] = 1
                : check [ str ]++;
        })
        return check.p === check.y;
}

console.log(solution2("pPoooyY"))
console.log(solution2("Pyy"))