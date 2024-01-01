import css from "./FormVisible.module.scss"
import React, {useState} from "react";

const FormVisible = ({closeForm, handleLogin}) => {
    const [password, setPassword] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        handleLogin(password);

        closeForm();
    }
    const closeModal = () => {
        setIsModalVisible(false);
        closeForm();
    };

    return isModalVisible ? (
        <div className={css.ModalOverlay}>
            <div className={css.ModalContent}>
                <form className={css.Form} onSubmit={handleFormSubmit}>
                    <input type="password" placeholder="Enter your passcode" value={password}
                           onChange={handlePasswordChange}/>
                    <button type="submit">LOGIN</button>
                    <a href="#">Forgot your passcode?</a>
                </form>
                <button className={css.closeButton} onClick={closeModal} >
                    Close
                </button>
            </div>
        </div>
    ) : null;
};


export default FormVisible;