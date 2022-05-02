// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";
  console.log("인증 번호 전송");

  const phoneNumber =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;

  axios.post("http://localhost:3001/tokens/phone", {
    aaa: phoneNumber,
  });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log("회원 가입 이메일 전송");

  const userName = document.getElementById("SignupName").value;
  const userPhone =
    document.getElementById("PhoneNumber01").value +
    document.getElementById("PhoneNumber02").value +
    document.getElementById("PhoneNumber03").value;
  const userEmail = document.getElementById("SignupEmail").value;
  const userSite = document.getElementById("SignupPrefer").value;
  const userSSN = document.getElementById("SignupPersonal").value;
  const userPwd = document.getElementById("SignupPwd").value;
  
  const user = {
    name: userName,
    email: userEmail,
    phone: userPhone,
    pwd: userPwd,
    SSN: userSSN,
    favSite: userSite  
  }

  axios.post("http://localhost:3001/users", {
    user,
  });
};
