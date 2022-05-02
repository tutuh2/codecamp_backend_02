// 1.  **day08** 폴더에 docker 기반의 express, mongodb 서버를 만들어 주세요.
// 2. 위 2개의 서버는 docker-compose로 묶어주세요.
// 3. 토큰을 저장하기 위해 mongodb 스키마를 만들어주세요.
//     1. 토큰 모델에는 핸드폰 번호, 토큰, isAuth(true 또는 false)가 들어가야합니다.

//         ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/456917e1-7ad3-4272-9749-2c90279a7d89/Untitled.png)

// 4. 핸드폰 인증 토큰을 만들어 DB에 저장하는 API를 만들어주세요.
//     1. API Method는 POST 방식입니다.
//     2. API Endpoint는 `/tokens/phone` 입니다.
//     3. Postman에서 해당 API를 요청할 때, 핸드폰 번호를 전달해줍니다.
//     4. 인증 토큰을 생성합니다.
//     5. 해당 핸드폰 번호가 이미 `Tokens` 문서에 저장되어 있다면 최신 토큰으로 덮어씁니다.
//     6. 요청을 여러번해도 추가되는것이 아니라 기존것을 업데이트하기 때문에, DB에는 한 핸드폰 번호당 하나의 데이터만 저장되어있습니다.
//     7. 인증 요청이 처음이라면 전달 받은 핸드폰 번호와 토큰, 그리고 **isAuth**는 **false** 값으로 DB에 저장합니다.
//     8. 토큰은 실제 핸드폰 문자로 전송되어야합니다.

import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Token } from "./models/token.model.js";

dotenv.config();
const app = express();
app.use(express.json());

app.post("/tokens/phone", async (req, res) => {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  //  console.log(req.body)
  const myphone = req.body.aaa;
  const isValid = checkValidationPhone(myphone);
  const mytoken = getToken();

  const result = await Token.find({ phone: myphone });
  console.log("======================================");
  console.log(result);
  console.log("======================================");

  if (result.length === 0) {
    const info = new Token({
      token: mytoken,
      phone: myphone,
      isAuth: false,
    });

    await info.save();
  } else {
    await Token.updateOne({ phone: myphone }, { token: mytoken });
  }

  if (isValid) {
    sendTokenToSMS(myphone, mytoken);
    res.send("인증완료!!");
  }
});

app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const mytoken = req.body.token;
  console.log(myphone);
  const result = await Token.find({ phone: myphone });
  if (result.length === 0) {
    res.send(false);
    console.log("케이스1");
  } else if (result[0].token === mytoken) {
    await Token.updateOne({ phone: myphone }, { isAuth: true });
    res.send(true);
    console.log("case2");
  } else {
    res.send(false);
    console.log("case3");
  }
});

mongoose.connect("mongodb://my_database:27017/codecamp");

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
