import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword , onAuthStateChanged, updateProfile } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({children})=> {

    const [authLoader, setAuthLoader] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userUid, setUserUid] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);
    const [userInfo, setUserInfo] = useState(null)

    onAuthStateChanged(auth, (currentuser)=> {
        if(currentuser){
            setIsLoggedIn(true);
            setUserUid(currentuser.uid);
            setUserInfo(currentuser.providerData[0]);
        }
    })
    
    const signInFun = (email, password)=> {

        setAuthLoader(true)

        if(!isLoggedIn){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setIsLoggedIn(true);
                setUserUid(user.uid);
                setAuthLoader(false);
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + ' ' + errorMessage)

                setAuthLoader(false)

            });
        }else{
            console.error('You are already logged in')
            setAuthLoader(false)
        }
    }

    const signUpFun = (obj)=> {

        const {username, password, photoURL, displayName} = obj;

        setAuthLoader(true)
        createUserWithEmailAndPassword(auth, username, password )
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {photoURL, displayName})
            setAccountCreated(true)
            setAuthLoader(true)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ' ' + errorMessage)
            setAuthLoader(false)
        });
    }

    const logOutFun = ()=> {
        signOut(auth).then(() => {
            console.log('User Signout Successfully !');
            location.reload();
          }).catch((error) => { });
    }

    return (
        <AuthContext.Provider value={{signInFun, authLoader, isLoggedIn, signUpFun, accountCreated, userInfo, logOutFun}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = ()=> {
    const {signInFun, authLoader, isLoggedIn, signUpFun, accountCreated, userInfo, logOutFun} = useContext(AuthContext);
    return {signInFun, authLoader, isLoggedIn, signUpFun, accountCreated, userInfo, logOutFun};
}