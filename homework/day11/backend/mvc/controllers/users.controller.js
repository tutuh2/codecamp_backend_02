import {checkValidationEmail, getWelcomeTemplate, sendWelcomeEmail} from './services/email.js'
import {createBoardAPI} from './services/meta.js'
import { User } from '../models/user.model.js'
import { Token } from '../models/token.model.js'
export class UserController {
    signUser = async (req, res) => {
        //   const myuser = req.body;
        const user = new User({ //입력된 회원정보 가져오기
          ...req.body,
        });
        const result = await Token.find({ phone: user.phone });// 핸드폰 번호 인증되었는지 확인
        if(result.length === 0){ // 입력된 핸드폰이 없을경우
          console.log("422 Error")
          res.status(422);
          res.send("에러!! 핸드폰 번호가 인증되지 않았습니다") // 핸드폰 번호는 입력되었으나 인증되지 않았을경우
        } else if(!result[0].isAuth) {
          console.log("422 Error")
          res.status(422);
          res.send("에러!! 핸드폰 번호가 인증되지 않았습니다")
        } else { // 핸드폰 인증이 되었을경우
          const og = await createBoardAPI(user.prefer)// 메타 데이터 뽑아오기
          user.og = og; // OG저장
          user.personal = user.personal.substring(0,7).padEnd(14,"*") // 뒷자리 가리기
          let validation = checkValidationEmail(user.email); // 이메일 적합성 테스트
          if(validation){ // 적합할 경우 전송
            const temp = getWelcomeTemplate(user);// 템플릿 불러오기
            sendWelcomeEmail(user.email, temp);// 템플릿을 적용해 이메일 전송하기
          }
          console.log("success")
          await user.save();// 유저정보 DB에 저장
          res.send(user._id)
        }
      }
    
    getUser = async (req, res) => {
        const result = await User.find();// 모든 회원목록 받아오기
        res.send(result);
      }
}