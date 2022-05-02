import {checkLength, checkValidation, masking} from './function.js'

function ssnMasking ( ssn ) {
    const isValid = checkValidation(ssn)
    // 1.주민번호 가운데가 "-"인지 확인
    
    if(isValid){
    // 2.주민번호 앞뒤 6자리, 7자리 확인
    const isValid2 = checkLength(ssn)
    if(isValid2)
    {

    // 3. 뒤 7자리중 6자리 ******으로 마스킹
    masking(ssn)
    }
    }

}

ssnMasking("920324-1038293")