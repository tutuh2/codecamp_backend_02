// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");
  const phoneNumber =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  axios.post("http://localhost:3001/tokens/phone", {
    phone: phoneNumber,
  });
};

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  console.log("핸드폰 인증 완료");
  const mytoken = document.getElementById("TokenInput").value;
  const phoneNumber =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  axios.patch("http://localhost:3001/tokens/phone", {
    phone: phoneNumber,
    token: mytoken,
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 완료");
  const name = document.getElementById("SignupName").value;
  const email = document.getElementById("SignupEmail").value;
  const personal = document.getElementById("SignupPersonal1").value +
   '-'+document.getElementById("SignupPersonal2").value;
  const prefer= document.getElementById("SignupPrefer").value ;
  const pwd = document.getElementById("SignupPwd").value;
  const phoneNumber =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  axios.post("http://localhost:3001/users", {
    name: name,
    email: email,
    personal: personal,
    prefer: prefer,
    pwd: pwd,
    phone: phoneNumber

  })
};
