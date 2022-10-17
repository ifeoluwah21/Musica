import React from 'react';
import styles from "./NewRelease.module.scss";

import cover1 from "../../assets/images/Rectangle-14.png";
import cover2 from "../../assets/images/Rectangle-15.png";
import cover3 from "../../assets/images/Rectangle-16.png";
import cover4 from "../../assets/images/Rectangle-17.png";
import cover5 from "../../assets/images/Rectangle-18.png";
import cover6 from "../../assets/images/Rectangle-19.png";
import cover7 from "../../assets/images/Rectangle-20.png";
import SongList from '../Songs/SongList';


const DUMMY_SONGS = [
    { id: `s1`, cover: cover1, author: `Burna Boy`, title: `Its plenty` },
    { id: `s2`, cover: cover2, author: `Burna Boy`, title: `Its plenty` },
    { id: `s3`, cover: cover3, author: `Burna Boy`, title: `Its plenty` },
    { id: `s4`, cover: cover4, author: `Burna Boy`, title: `Its plenty` },
    { id: `s5`, cover: cover5, author: `Burna Boy`, title: `Its plenty` },
    { id: `s6`, cover: cover6, author: `Burna Boy`, title: `Its plenty` },
    { id: `s7`, cover: cover7, author: `Burna Boy`, title: `Its plenty` },
];

const NewRelease = () => {
    return (
        <section className={styles.newrelease}>
            <h2 className={styles[`newrelease__title`]}>New releases</h2>
            <SongList DUMMY_SONGS={DUMMY_SONGS} />
        </section>
    );
};

export default NewRelease;