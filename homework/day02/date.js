function generateTime () {
    let today = new Date();

    let day = today.getDate();
    let year = today.getFullYear();
    let month = today.getMonth();
    let hour = String(today.getHours()).padStart(2,'0');
    let min = String(today.getMinutes()).padStart(2,'0');
    let sec = String(today.getSeconds()).padStart(2,'0');

    console.log(`오늘은 ${year}년 ${month+1}월 ${day}일 ${hour}:${min}:${sec} 입니다.`)
    // “오늘은 2020년 12월 2일 11:30:29 입니다.”

}

generateTime();