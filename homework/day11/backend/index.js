import { checkValidationPhone, getToken, sendTokenToSMS } from "./mvc/controllers/services/phone.js";
import express from "express";
const app = express();
app.use(express.json());

import mongoose from "mongoose";

import dotenv from "dotenv";

import cors from 'cors'
app.use(cors());
import { Token } from "./mvc/models/token.model.js";
import { Starbucks } from "./mvc/models/starbucks.model.js";
dotenv.config();

import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from './swagger/config.js'
import { UserController } from "./mvc/controllers/users.controller.js";
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

// 회원 관련 API
const userController = new UserController()
app.post("/users", userController.signUser);// 회원 가입 API
app.get("/users", userController.getUser);// 회원 목록 조회 API:GET/users

// 토큰 인증 요청 API:POST/tokens/phone
app.post("/tokens/phone", async (req, res) => {
  // 1. 휴대폰번호 자릿수 맞는지 확인하기
  //  console.log(req.body)
  const myphone = req.body.phone;
  const isValid = checkValidationPhone(myphone);
  const mytoken = getToken();
  const result = await Token.find({ phone: myphone });

  if(!isValid){//핸드폰 번호가 형식에 맞지 않을경우
    res.send("인증실패!!")
    return
  }

  if (result.length === 0) { // 핸드폰이 등록되어 있지 않을경우
    const info = new Token({
      token: mytoken,
      phone: myphone,
      isAuth: false,
    });

    await info.save(); // 핸드폰이 등록되어 있을경우
  } else {
    await Token.updateOne({ phone: myphone }, { token: mytoken });
  }

  if (isValid) {
      sendTokenToSMS(myphone, mytoken);
    res.send("인증완료!!");
  }
});

// 인증완료 API:PATCH/tokens/phone
app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;
  const mytoken = req.body.token;
  const result = await Token.find({ phone: myphone }); // 핸드폰번호가 DB에 저장되어있는지 확인
  if (result.length === 0) { // 저장되어있지 않은경우
    res.send(false);
    console.log("케이스1");
  } else if (result[0].token === mytoken) { // 만약 핸드폰번호가 저장되어있고, 토큰이 서로 일치하는경우
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
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
