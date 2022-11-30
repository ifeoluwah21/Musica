import React from 'react';
import styles from "./NewRelease.module.scss";

import SongList from '../Songs/SongList';
import { useLoaderData } from 'react-router-dom';


const NewRelease = (props) => {
    const data = useLoaderData();
    return (
        <section className={`${styles.newrelease} ${props.className}`}>
            <h2 className={styles[`newrelease__title`]}>New releases</h2>
            <SongList songs={data} />
        </section>
    );
};

export default NewRelease;