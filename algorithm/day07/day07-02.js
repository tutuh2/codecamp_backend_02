function solution(seoul) {
    var answer = '';
    var index;
    index = seoul.findIndex(element => element ==="Kim")
    answer = `김서방은 ${index}에 있다`
    return answer;
}