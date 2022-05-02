import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";
import {
  checkValidationEmail,
  getWelcomeTemplate,
  sendWelcomeEmail,
} from "./email.js";

import { createBoardAPI } from "./meta.js";

import express from "express";
const app = express();
app.use(express.json());

import mongoose from "mongoose";

import dotenv from "dotenv";

import cors from "cors";
app.use(cors());
import { User } from "./models/user.model.js";
import { Token } from "./models/token.model.js";
import { Starbucks } from "./models/starbucks.model.js";
dotenv.config();

import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// 회원 가입 API
app.post("/users", async (req, res) => {
  //   const myuser = req.body;
  const user = new User({
    //입력된 회원정보 가져오기
    ...req.body,
  });
  const result = await Token.findOne({ phone: user.phone }); // 핸드폰 번호 인증되었는지 확인 findOne 쓰기
  if (result.length === 0) {
    // 입력된 핸드폰이 없을경우
    console.log("422 Error");
    res.status(422);
    res.send("에러!! 핸드폰 번호가 인증되지 않았습니다");
    return; // 핸드폰 번호는 입력되었으나 인증되지 않았을경우
  }

  if (!result.isAuth) {
    console.log("422 Error");
    res.status(422);
    res.send("에러!! 핸드폰 번호가 인증되지 않았습니다");
    return;
  }

  // 핸드폰 인증이 되었을경우
  if (result.isAuth) {
    const og = await createBoardAPI(user.prefer); // 메타 데이터 뽑아오기
    user.og = og; // OG저장
    user.personal = user.personal.substring(0, 7).padEnd(14, "*"); // 뒷자리 가리기
    let validation = checkValidationEmail(user.email); // 이메일 적합성 테스트

    if (!validation) {
      //적합하지 않을경우
      console.log("fail");
      res.send("이메일을 제대로 입력해 주세요");
      return
    }

    if (validation) {
      // 적합할 경우 전송후 저장
      const temp = getWelcomeTemplate(user); // 템플릿 불러오기
      sendWelcomeEmail(user.email, temp); // 템플릿을 적용해 이메일 전송하기
      console.log("success");
      await user.save(); // 유저정보 DB에 저장
      res.send(user._id);
    }
  }
});

// 회원 목록 조회 API:GET/users
app.get("/users", async (req, res) => {
  const result = await User.find(); // 모든 회원목록 받아오기
  res.send(result);
});

// 토큰 인증 요청 API:POST/tokens/phone
app.post("/tokens/phone", async (req, res) => {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  //  console.log(req.body)
  const myphone = req.body.phone;
  const isValid = checkValidationPhone(myphone);
  const mytoken = getToken();
  const result = await Token.findOne({ phone: myphone });

  if (!isValid) {
    //핸드폰 번호가 형식에 맞지 않을경우
    res.send("인증실패!!");
    return;
  }

  // 핸드폰이 등록되어 있지 않을경우
  if (result === null) {
    const info = new Token({
      token: mytoken,
      phone: myphone,
      isAuth: false,
    });

    await info.save();
  }

  // 핸드폰이 등록되어 있을경우
  if (result !== null) {
    await Token.updateOne({ phone: myphone }, { token: mytoken });
  }

  // sendTokenToSMS(myphone, mytoken);
  res.send("인증완료!!");
});

// 인증완료 API:PATCH/tokens/phone
app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const mytoken = req.body.token;
  const result = await Token.find({ phone: myphone }); // 핸드폰번호가 DB에 저장되어있는지 확인
  if (result.length === 0) {
    // 저장되어있지 않은경우
    res.send(false);
    console.log("케이스1");
  } else if (result[0].token === mytoken) {
    // 만약 핸드폰번호가 저장되어있고, 토큰이 서로 일치하는경우
    await Token.updateOne({ phone: myphone }, { isAuth: true });
    res.send(true);
    console.log("case2");
  } else {
    res.send(false); // 핸드폰번호가 저장되어있지만 토큰이 서로 일치하지 않는경우
    console.log("case3");
  }
});

// 스타벅스 커피 목록 조회API:GET/starbucks

app.get("/starbucks", async (req, res) => {
  const menu = await Starbucks.find();

  res.send(menu);
});

// DB 연결
mongoose.connect("mongodb://my_database:27017/codecamp");

// port 오픈
app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`);
});
