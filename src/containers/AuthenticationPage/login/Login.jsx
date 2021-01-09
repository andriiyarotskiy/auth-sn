import React, {useContext} from 'react';
import style from './Login.module.scss'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {Context} from "../../../App";
import FacebookBtn from "../../../components/Buttons/FacebookBtn/FacebookBtn";

const FacebookID = process.env.REACT_APP_FACEBOOK_APP_ID

const Login = ({setActive}) => {


    const {state, dispatch} = useContext(Context)


    const responseFacebook = (response) => {
        if (response) {
            console.log(response)
            setActive(false)
            dispatch({type: 'USER_AUTH'})
            localStorage.setItem('token', response.accessToken)
        } else {
            console.log('error authentication')
        }
        // response.accessToken
    }

    return (
        <div>
            <span className={style.loginTitle}>Log In</span>
            <div>
                <FacebookLogin
                    appId={FacebookID}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={renderProps => (
                        <FacebookBtn onClick={renderProps.onClick} />
                        // <button
                        //     className={style.facebookBtn}
                        //     onClick={renderProps.onClick}>This is my custom FB button</button>
                    )}
                />
            </div>
        </div>
    );
};

export default Login;