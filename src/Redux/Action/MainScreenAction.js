import { IS_LOADING_CONST } from '../Constant'


export const isLoading_Action = (val) => {
    return{
        type: IS_LOADING_CONST,
        payload: val
    }
}

export const pwd_validation_errorMsg = (msg) => {
    return{
        type: APP_LOGIN_PWD_ERROR_MESSAGE,
        payload: msg
    }
}
export const onChange_email = (email) => {
    return{
        type: APP_LOGIN_ONCHANGE_EMAIL,
        payload: email

    }
}
export const onChange_pwd = (pwd) =>{
    return{
        type:APP_LOGIN_ONCHANGE_PWD,
        payload: pwd
    }
}