import React from 'react';
import SongList from '../Songs/SongList';
import styles from "./AreaQuery.module.scss";
import { useLoaderData } from 'react-router-dom';




const AreaQuery = (props) => {
    const data = useLoaderData();
    return (
        <section className={`${styles.area} ${props.className}`}>
            <h2 className={styles[`area__title`]}>Popular in your area</h2>
            <SongList songs={data} />
        </section>
    );
};

export default AreaQuery;