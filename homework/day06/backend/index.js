import {checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
import { checkValidationEmail, getWelcomeTemplate, sendWelcomeEmail } from "./email.js";
import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import {options} from './swagger/config.js'
import cors from 'cors'

import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/users', (req, res) => {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    
    const result = [
        { email: "tutuh@naver.com", name: "준영", phone: "01047381234", personal : "920807-1234567", prefer : "google.com"},
        { email: "tutuh2@naver.com", name: "준영2", phone: "01047382345", personal : "920808-1234567", prefer : "naver.com"},
        { email: "tutuh3@naver.com", name: "준영3", phone: "01047383456", personal : "920809-1234567", prefer : "daum.com"},
        { email: "tutuh4@naver.com", name: "준영4", phone: "01047384567", personal : "920810-1234567", prefer : "npmjs.com"},
        { email: "tutuh5@naver.com", name: "준영5", phone: "01047385678", personal : "920811-1234567", prefer : "yahoo.com"}
    ]

    res.send(result);
    console.log("성공");
})

app.get('/starbucks', (req, res) => {
// 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기

    const result = [
        { name: '아메리카노', kcal: 5 },
        { name: '카페모카', kcal: 95 },
        { name: '에스프레소', kcal: 5 },
        { name: '쿠키앤크림쉐이크', kcal: 307 },
        { name: '녹차프라페', kcal: 270 },
        { name: '밀크티', kcal: 280 },
        { name: '레모네이드', kcal: 175 },
        { name: '자몽에이드', kcal: 165 },
        { name: '밀크쉐이크', kcal: 300 },
        { name: '민트프라푸치노', kcal: 180 }
    ]

    res.send(result);
    console.log("성공");
})

app.post('/tokens/phone', (req, res) => {
    const myphone = req.body.aaa
    // 1. 휴대폰번호 자릿수 맞는지 확인하기
    //  console.log(req.body)
     const isValid = checkValidationPhone(myphone)
     if(isValid){
  
      // 2. 핸드폰 토큰 6자리 만들기
      const mytoken = getToken()
  
      // 3. 핸드폰번호에 토큰 전송하기
      sendTokenToSMS(myphone, mytoken)
     res.send("인증완료!!")
     }
  } )

app.post('/users', (req, res) => {
    const myuser = req.body.user

// 1. 이메일이 정상인지 확인 (1- 존재여부, 2- "@" 포함여부)
    let validation = checkValidationEmail(myuser.email);

// 2. 가입환영 템플릿 만들기
// 3. 이메일에 가입환영 템플릿 전송하기
    if(validation) {
    const temp = getWelcomeTemplate(myuser);
    sendWelcomeEmail(myuser.email, temp);
    }
    res.send("인증완료!!")
})

app.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`)
})