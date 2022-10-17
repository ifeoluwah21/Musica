import React from 'react';
import HomeIcon from "../Icons/HomeIcon";
import PlaylistIcon from "../Icons/PlaylistIcon";
import RadioIcon from "../Icons/RadioIcon";
import VideosIcon from "../Icons/VideosIcon";
import LogoutIcon from '../Icons/LogoutIcon';
import ProfileIcon from "../Icons/ProfileIcon";

import styles from "./AppNav.module.scss";

const AppNav = () => {
    return (
        <nav className={`${styles.nav}`}>
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
    );
};

export default AppNav;