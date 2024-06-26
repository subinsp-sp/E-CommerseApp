import './button.styles.scss'

const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({ children, buttontype, ...otherprops }) => {

    return (
        <button className={`button-container ${BUTTON_TYPE_CLASS[buttontype]}`} {...otherprops} >
            {children}
        </button>
    )
}

export default Button;