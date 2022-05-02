function solution(s) {
    var answer = '';
    let arr = s.split(" ");
    console.log(arr);

    for(let i = 0; i<arr.length ; i++){
        let word = ""
        for(let j = 0; j<arr[i].length; j++){
            if(j%2 === 0){
                word += arr[i][j].toUpperCase();
            } else {
                word += arr[i][j].toLowerCase();
            }
        }
        arr[i] = word;
    }
    console.log(arr);
    answer = arr.join(" ");
    return answer;
}

console.log(solution("try hello world"));