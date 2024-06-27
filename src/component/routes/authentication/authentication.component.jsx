import { useEffect } from "react";
import { auth, createuserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleReDirect } from "../../../util/firebase/firebase-util";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../sign-up/signUp-component";
import SignIn from "../../sign-in/sign-in-component";
import './authentication.styles.scss'

const Authentication = () => {

    return (
        <div className="authentication-container">

            {/* <button onClick={loginGoogleuser}>Sign in with google popup</button> */}
            {/* <button onClick={signInWithGoogleReDirect}>Sign in with google Redirect</button> */}
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;