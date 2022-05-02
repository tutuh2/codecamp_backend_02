function solution(n) {
    var answer = [];
    let nstr = n.toString().split("").reverse();
            
    for(let i = 0; i<nstr.length; i++){
        nstr[i] = Number(nstr[i])
    }
    answer = nstr;
    return answer;
}

console.log(solution(12345))