export function checkEmail(myEmail){
    if(myEmail === undefined || !myEmail.includes("@"))
    {
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!");
        return false;
    } else {
        return true;
    }
}

export function checkPhone(myPhone){
    if(myPhone.length === 10 || myPhone.length === 11){
        return true;
    } else {
        console.log("에러발생!! 휴대폰 번호를 제대로 입력해주세요")
        return false;
    }
}

export function checkSSN(mySSN){
    if(mySSN === undefined || !mySSN.includes("-") || mySSN.length !== 14)
    {
        console.log("에러발생!! 주민번호를 제대로 입력해 주세요!!!!");
        return false;
    } else {
        return true;
        }
}

export function getTemplate(myEmail, mySSN, myPhone, myFavSite){

    return `
        <html>
            <body>
                <h1>${myEmail}님 가입을 환영합니다!!!</h1>
                <hr />
                <div>주민번호: ${mySSN}</div>
                <div>휴대폰 번호: ${myPhone}</div>
                <div>좋아하는 사이트: ${myFavSite}</div>
            </body>
        </html>
    `
}