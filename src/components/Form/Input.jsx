import React from 'react';
import { BsSearch } from "react-icons/bs";

import styles from "./Input.module.scss";

const Input = (props) => {
    return (
        <form className={`${styles.form} ${props.className}`}>
            <div className={`${styles[`form__control`]} ${styles.input}`}>
                <BsSearch className={styles[`input__icon`]} />
                <input type="text" name='name' placeholder='Search artist' />
            </div>
        </form>
    );
};

export default Input;