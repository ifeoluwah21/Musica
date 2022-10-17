import React from 'react';
import styles from "./Header.module.scss";
import Input from "../../Form/Input";

import LogoIcon from "../Icons/LogoIcon";


const Header = () => {

    return (
        <header className={styles.header}>
            <LogoIcon className={`${styles["header__logo"]}`} />
            <Input className={`${styles[`header__input`]}`} />
        </header>
    );
};

export default Header;