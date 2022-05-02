import {checkEmail, checkPhone, checkSSN, getTemplate} from "./check.js"

function welcomeTemplate ({email, SSN, phone, favSite}) {
    //이메일, 주민번호, 휴대폰 번호, 내가 좋아하는 사이트를 함수의 입력으로 받고,
    //  해당 내용이 html 태그로 감싸진 템플릿에 포함되어 콘솔에 출력되어야합니다.
    
    let isEmailValid = checkEmail(email);
    
    let isPhoneValid = checkPhone(phone);
    
    let isSSNValid = checkSSN(SSN);

    if(isEmailValid && isPhoneValid && isSSNValid){
        const myTemplate = getTemplate(email, SSN, phone, favSite);
        console.log(myTemplate);
    }


}

const newUser = {
    email : "a@a.com",
    SSN : "920808-1234567",
    phone : "01012345678",
    favSite : "Google"
}

welcomeTemplate(newUser);