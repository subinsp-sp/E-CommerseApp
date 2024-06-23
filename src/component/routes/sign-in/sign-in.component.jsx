import { createuserDocumentFromAuth, signInWithGooglePopup } from "../../../util/firebase/firebase-util";


const SignIn = () => {

    const loginGoogleuser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createuserDocumentFromAuth(user);
    }
    return (
        <div>
            SIGN IN
            <button onClick={loginGoogleuser}>Sign in with google popup</button>
        </div>
    )
}

export default SignIn;