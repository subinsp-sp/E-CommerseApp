import { useEffect } from "react";
import { auth, createuserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleReDirect } from "../../../util/firebase/firebase-util";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../sign-up/signUp-component";


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

            <button onClick={loginGoogleuser}>Sign in with google popup</button>
            {/* <button onClick={signInWithGoogleReDirect}>Sign in with google Redirect</button> */}
            <SignUp />
        </div>
    )
}

export default SignIn;