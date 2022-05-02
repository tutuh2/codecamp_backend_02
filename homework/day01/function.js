export function checkValidation( ssn ) {
    if(ssn[6] !== "-") {
        console.log("에러발생!!! 형식이 올바르지 않습니다!!!")
        return false
    }
    else {
        return true
    }
}

export function checkLength( ssn ) {
    let num = ssn.split("-")
    let front = num[0]
    let back = num[1]

    if(front.length !== 6 || back.length !== 7) {
        console.log("에러발생!!! 갯수를 제대로 입력해주세요!!!")
        return false
    } else {
        return true
    }
}

export function masking( ssn ) {
    let num = ssn.split("-")
    let front = num[0]
    let back = num[1]

    back = back.slice(0,1) +"******"
    console.log(front+"-"+back)
}
