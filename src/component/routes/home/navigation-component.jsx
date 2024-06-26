import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import './navigation.styles.scss'
import { useContext } from "react"
import { UserContext } from "../../../contexts/context.component"
import { signOutUser } from "../../../util/firebase/firebase-util"
const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

    return (

        <>
            <div className="navigation">

                <Link to="/" className="logo-container">
                    <CrwnLogo className="logo" />

                </Link>
                <div className="nav-links-container">

                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {currentUser ? <Link className="nav-link" onClick={signOutHandler}>Sign Out</Link>
                        : <Link className="nav-link" to="/auth">SIGN IN</Link>}

                </div>


            </div>
            <Outlet />
        </>
    )
}

export default Navigation;