import css from "./FormVisible.module.scss"
import React, {useState} from "react";

const FormVisible = ({ closeForm, handleLogin }) => {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        handleLogin(password);

        closeForm();
    }

    return(
        <div>
            <form className={css.Form} onSubmit={handleFormSubmit}>
                <input type="password" placeholder="Enter your passcode"  value={password}
                       onChange={handlePasswordChange}/>
                <button type="submit">LOGIN</button>
                <a href="#">Forgot your passcode?</a>
            </form>
        </div>
    )
}


export default FormVisible;