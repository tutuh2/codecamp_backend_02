import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc';
import {options} from './swagger/config.js'

const app = express();
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

app.listen(3012, () => {
    console.log(`Example app listening on port ${3012}`)
})