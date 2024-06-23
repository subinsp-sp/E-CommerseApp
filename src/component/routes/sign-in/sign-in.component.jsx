import { useEffect } from "react";
import { auth, createuserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleReDirect } from "../../../util/firebase/firebase-util";
import { getRedirectResult } from "firebase/auth";


const SignIn = () => {

    const loginGoogleuser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createuserDocumentFromAuth(user);
    }

    useEffect(() => {
        const fetchRedirectResult = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createuserDocumentFromAuth(response.user);
            }


        }

        fetchRedirectResult();
    }, []);

    return (
        <div>
            SIGN IN
            <button onClick={loginGoogleuser}>Sign in with google popup</button>
            {/* <button onClick={signInWithGoogleReDirect}>Sign in with google Redirect</button> */}
        </div>
    )
}

export default SignIn;