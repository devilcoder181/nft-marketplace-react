import "./login.scss";
import { UInput } from "../../components/form/uiinput";
import bg from "../../assets/images/login-bg.png";
import UIButton, { ButtonGroup } from "../../components/button/button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import UICommonLoader from "../../components/commonloader/commonloader";
import { useAuthContext } from "../../../store/authContext";

const UILogin = ()=> {

    const {signInFun, authLoader, isLoggedIn} = useAuthContext();

    const credentials = {
        username: '',
        password: ''
    }

    const [userCredential, setUserCredentials] = useState(credentials);
    const [isDisable, setIsDisable] = useState(true);

    useEffect(()=> {
        if(userCredential.username && userCredential.password){
            setIsDisable(false)
        }
    }, [userCredential])

    const getUsername = (event)=> {
        setUserCredentials({
            ...userCredential,
            username: event
        })
    }

    const getPassword = (event)=> {
        setUserCredentials({
            ...userCredential,
            password: event
        })
    }

    const loginFn = ()=> {

        if(isDisable) return;
        signInFun(userCredential.username, userCredential.password);

    }


    return (
        <main className="login_main">

            <div className="bg_">
                <picture>
                    <source srcSet={bg} />
                    <img src={bg} loading="lazy" />
                </picture>
            </div>

            <div className="container">
                <div className="login_wrapper">

                    <div className="inner_">
                        <div className="title_">
                            <h2>Welcome Back...</h2>
                            <p>Please enter your email and password.</p> 
                        </div>
                        <UInput title="Username" type="email" value={userCredential.username} getData={getUsername}/>
                        <UInput title="Password" type="password" value={userCredential.password} getData={getPassword}/>

                        <ButtonGroup align="between_">
                            <Link to="/forgot-password" className="forgot_pass_link">Forgot Password ?</Link>
                            <UIButton title="Login" disable={isDisable} triggerClick={loginFn}/>
                        </ButtonGroup>

                        <hr />

                        <div className="register_wrapper">
                            <p>Don't have an account ? <Link to="/create-account">Register Account</Link></p>
                        </div>

                        {
                            authLoader &&
                            <UICommonLoader />

                        }
                    </div>

                </div>
            </div>
        </main>
    )
}

export default UILogin;