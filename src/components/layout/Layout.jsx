import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';
import AppNav from '../UI/Nav/AppNav';

import styles from "./Layout.module.scss";

const Layout = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <AppNav />
            </main>
            <footer>

            </footer>
        </Fragment>
    );
};

export default Layout;