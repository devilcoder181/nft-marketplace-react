import { UInput } from "../../components/form/uiinput";
import bg from "../../assets/images/login-bg.png";
import UIButton, { ButtonGroup, UILinkButton } from "../../components/button/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UICommonLoader from "../../components/commonloader/commonloader";
import { useAuthContext } from "../../../store/authContext";
import UIFileUpload from "../../components/form/fileUpload";
import { useLottie } from "lottie-react";
import loaderJson from "../../assets/lottie/success.json"

const UISignUp = ()=> {

   

    const {authLoader, signUpFun, accountCreated} = useAuthContext();

    const credentials = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        imageurl: ''
    }

    const options = {
        animationData: loaderJson,
        loop: false,
        autoplay: true,
    };

    const { View } = useLottie(options);


    const [userCredential, setUserCredentials] = useState(credentials);
    const [isDisable, setIsDisable] = useState(true);

    useEffect(()=> {
        if(userCredential.username && userCredential.password && userCredential.firstname && userCredential.lastname && userCredential.imageurl){
            setIsDisable(false)
        }
    }, [userCredential])

    const setFirtname = (event)=> {
        setUserCredentials({
            ...userCredential,
            firstname: event
        })
    }

    const setLastname = (event)=> {
        setUserCredentials({
            ...userCredential,
            lastname: event
        })
    }
    
    const setUsername = (event)=> {
        setUserCredentials({
            ...userCredential,
            username: event
        })
    }

    const setPassword = (event)=> {
        setUserCredentials({
            ...userCredential,
            password: event
        })
    }

    const imageFun = (event)=> {
        setUserCredentials({
            ...userCredential,
            imageurl: event
        })
    }

    const loginFn = ()=> {

        if(isDisable) return;

        const userObj = {
            username: userCredential.username,
            password: userCredential.password,
            photoURL: userCredential.imageurl,
            displayName: userCredential.firstname + ' ' + userCredential.lastname
        }
        signUpFun(userObj);

    }


    return (
        <main className="login_main sign_up">

            <div className="bg_">
                <picture>
                    <source srcSet={bg} />
                    <img src={bg} loading="lazy" />
                </picture>
            </div>

            <div className="container">

                {
                    !accountCreated &&
                    <div className="login_wrapper">

                        <div className="inner_">
                            <UIFileUpload getData={imageFun}/>
                            <div className="title_">
                                <h2>Create Account</h2>
                                <div className="register_wrapper">
                                    <p>Already have an account ? <Link to="/login">Login</Link></p>
                                </div>
                            </div>
                            <UInput title="First Name" type="email" value={userCredential.firstname} getData={setFirtname}/>
                            <UInput title="Last Name" type="email" value={userCredential.lastname} getData={setLastname}/>
                            <UInput title="Email" type="email" value={userCredential.username} getData={setUsername}/>
                            <UInput title="Password" type="password" value={userCredential.password} getData={setPassword}/>

                            <ButtonGroup align="between_">
                                <UIButton title="Sign Up" disable={isDisable} triggerClick={loginFn}/>
                            </ButtonGroup>

                            {
                                authLoader &&
                                <UICommonLoader />

                            }

                        </div>

                    </div>
                }

                {
                    accountCreated &&
                    <div className="login_wrapper">
                        <div className="inner_">
                            <div className="status_icon">
                                <>
                                {View}
                                </>
                            </div>
                            <div className="title_">
                                <h2>Wonderful ! Account Created</h2>
                                <div className="register_wrapper">
                                    <p>A verification mail has been sent your email. <br/> Pelase check your inbox</p>
                                </div>
                            </div>
                            <ButtonGroup align="center_">
                                <UILinkButton link="/login" title="Login" />
                            </ButtonGroup>
                        </div>
                    </div>
                }

                
            </div>
        </main>
    )
}

export default UISignUp;