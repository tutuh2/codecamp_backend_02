import axios from "axios";
import { getToday } from "./utils.js";

export function checkValidationEmail(email) {
    if(email === undefined || !email.includes("@"))
    {
        console.log("에러발생!! 이메일을 제대로 입력해 주세요!!!!");
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate(user){

        return `
            <html>
                <body>
                    <h1>${user.name}님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div>이름: ${user.name}</div>
                    <div>좋아하는 사이트: ${user.prefer}
                    <div>${user.og.image} </div>
                    <div>가입일: ${getToday()}</div>
                </body>
            </html>
        `
    
}

export async function sendWelcomeEmail (email, template) {
    const appKey = process.env.EMAIL_APP_KEY
    const XSecretKey = process.env.EMAIL_X_SECRET_KEY
    const sender = process.env.EMAIL_SENDER
    const result = await axios.post(
        `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`, 
        {
            senderAddress: sender,
            title: "안녕하세요 . 가입을 환영합니다.",
            body: template,
            receiverList: [{ receiveMailAddr: email, receiveType: "MRT0" }]
        },
        {
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "X-Secret-Key": XSecretKey
            }
        }
    )
    console.log("전송 끝!!!")
    // console.log(`${email} 이메일로 ${template}를 전송하였습니다.`);
}