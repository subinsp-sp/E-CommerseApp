import { useContext, useState } from "react";
import { createAuthuserWithEmailAndPassword, createuserDocumentFromAuth } from "../../util/firebase/firebase-util";
import Forminput from "../form-input/form-input-component";
import './sign-up.styles.scss'
import Button from "../button/button-component";
import { UserContext } from "../../contexts/context.component";
const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}


const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    const { setCurrentUser } = useContext(UserContext)

    const handleSubmit = async (event) => {
        console.log("handleSubmit")
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password doent match")
        }

        try {
            const { user } = await createAuthuserWithEmailAndPassword(email, password);

            setCurrentUser(user)
            await createuserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                alert("Email already registered")
            }
            console.log(error);
        }

    }

    return (
        <div className="sign-up-container">
            <h2>Dont have an account?</h2>
            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <Forminput label="Display Name" type="text" required onChange={handleChange} value={displayName} name="displayName" />
                <Forminput label="Email" type="email" required onChange={handleChange} value={email} name="email" />
                <Forminput label="Password" type="password" required onChange={handleChange} value={password} name="password" />
                <Forminput label="Confirm Password" type="password" required onChange={handleChange} value={confirmPassword} name="confirmPassword" />
                <Button type="submit" >Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;