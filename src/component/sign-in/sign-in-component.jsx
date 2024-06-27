import { useState } from "react";
import { createAuthuserWithEmailAndPassword, createuserDocumentFromAuth, signInAuthuserWithEmailAndPassword, signInWithGooglePopup } from "../../util/firebase/firebase-util";
import Forminput from "../form-input/form-input-component";
import './sign-in.styles.scss'
import Button from "../button/button-component";
const defaultFormFields = {

    email: "",
    password: "",

}


const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        console.log("handleSubmit")
        event.preventDefault();


        try {
            const response = await signInAuthuserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {
            alert("Invalid credentials");

        }

    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createuserDocumentFromAuth(user);
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <Forminput label="Email" type="email" required onChange={handleChange} value={email} name="email" />
                <Forminput label="Password" type="password" required onChange={handleChange} value={password} name="password" />
                <div className="buttons-container">
                    <Button type="submit" >Sign In</Button>
                    <Button buttontype="google" onClick={signInWithGoogle} >Google Sign In</Button>

                </div>
            </form>
        </div>
    )
}

export default SignIn;