import React from 'react';
import NowPlayingDetail from '../PlayerControls/NowPlayingDetail';
import PlayControls from '../PlayerControls/PlayControls';

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <NowPlayingDetail className={styles[`footer__details`]} />
            <PlayControls className={styles[`footer__controls`]} />
        </footer>
    );
};

export default Footer;