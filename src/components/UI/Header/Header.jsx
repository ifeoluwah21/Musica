import React from 'react';
import styles from "./Header.module.scss";
import HomeIcon from "../Icons/HomeIcon";
import PlaylistIcon from "../Icons/PlaylistIcon";
import RadioIcon from "../Icons/RadioIcon";
import VideosIcon from "../Icons/VideosIcon";
import LogoutIcon from '../Icons/LogoutIcon';
import ProfileIcon from "../Icons/ProfileIcon";
import LogoIcon from "../Icons/LogoIcon";

const Header = () => {

    return (
        <header className={styles.header}>
            <LogoIcon />
            <nav className={`${styles["header__nav"]} ${styles.nav}`}>
                <ul className={`${styles["nav__pry"]}`}>
                    <li><HomeIcon /></li>
                    <li><PlaylistIcon /></li>
                    <li><RadioIcon /></li>
                    <li><VideosIcon /></li>
                </ul>
                <ul className={`${styles["nav__sec"]}`}>
                    <li><LogoutIcon /></li>
                    <li><ProfileIcon /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;