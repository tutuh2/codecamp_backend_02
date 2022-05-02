const day = "월요일";
let result="";
switch( day ) {
    
    case "월요일" :
        result = "오늘은 월요일입니다.";
    case "화요일" :
        result = "오늘은 화요일입니다.";
    case "수요일" :
        result = "오늘은 화요일입니다.";
    default : 
        result = "오늘은 " + day + "입니다.";
    
}

console.log(result);