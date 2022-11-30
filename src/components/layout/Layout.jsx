import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../UI/Footer/Footer';

import Header from '../UI/Header/Header';
import AppNav from '../UI/Nav/AppNav';

import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <Fragment>
            <Header className={styles[`header`]} />
            <main className={styles.main}>
                <AppNav className={styles[`side-nav`]} />
                <Outlet className={styles['main__section']} />
            </main>
            <Footer className={styles.footer} />
        </Fragment>
    );
};

export default Layout;