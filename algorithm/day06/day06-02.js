function solution(phone_number) {
    var answer = '';
    
    // for(let i = 0 ; i < (phone_number.length - 4) ; i++){
    //     answer += "*";
    // }
    // answer = answer + phone_number.slice(phone_number.length-4)
    // return answer;

    // 리팩토링 버전
    answer = phone_number.substr(phone_number.length-4, phone_number.length)
    answer = answer.padStart(phone_number.length, "*")
    console.log(answer)
    
    return answer

    // 강사님 버전, 거의 비슷하지만 slice 사용
    // answer = answer.padStart( phone_number =4, "*" );
    // answer += phone_number.slice(phone_number.length-4)
    // console.log(answer)
}