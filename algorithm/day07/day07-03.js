function solution(s) {
    var answer = true;
    if(s.length === 4 || s.length === 6) {
       answer = true; 
    } else {
       return false;
    }
    
    for(let i = 0; i< s.length; i++) {
        console.log(s[i]);
        if(isNaN(Number(s[i]))){
            return false;
        }
    }
    
    return answer;
}

function solution2(s) {
    var answer = true;
    if(s.length !== 4 && s.length !== 6) {
       return false;
    }

    // 배열에 문자열이 있는지 확인, 문자열이 있을경우 빈배열이 아니라
    // false를 리턴, 비어있을경우 true;
    const answer = s.split("").filter( num => {
        return isNaN(num)
    });

    return answer.length===0;
}