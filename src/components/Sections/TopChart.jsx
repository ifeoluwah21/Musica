import React from 'react';
import TopChartMusicItem from '../Songs/TopChartMusicItem';

import cover1 from "../../assets/images/cover-1.png";
import cover2 from "../../assets/images/cover-2.png";
import cover3 from "../../assets/images/cover-3.png";

import styles from "./TopChart.module.scss";

const albums = [
    {
        title: `Golden age of 80s`,
        author: `Sean swadder`,
        duration: `2:34:45`,
        id: `a1`,
        cover: cover1
    },
    {
        title: `Reggae “n” blues`,
        author: `Dj YK mule`,
        duration: `1:02:42`,
        id: `a2`,
        cover: cover2
    },
    {
        title: `Tomorrow’s tunes`,
        author: `Obi Datti`,
        duration: `2:01:25`,
        id: `a3`,
        cover: cover3
    }
];

const TopChart = () => {
    const chart = albums.map(album => {
        return (
            <TopChartMusicItem cover={album.cover} key={album.id} title={album.title} author={album.author} duration={album.duration} />
        );
    });
    return (
        <section className={styles.chart}>
            <h2 className={styles[`chart__title`]}>Top charts</h2>
            {chart}
        </section>
    );
};

export default TopChart;