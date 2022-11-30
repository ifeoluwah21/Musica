import React from 'react';
import TopChartMusicItem from '../Songs/TopChartMusicItem';

import styles from "./TopChart.module.scss";
import { useLoaderData } from 'react-router-dom';



const TopChart = (props) => {
    const data = useLoaderData();
    const slicedData = data?.slice(0, 3);
    const chart = slicedData.map(data => {
        return (
            <TopChartMusicItem thumbnail={data.thumbnail} key={data.id} title={data.title} artist={data.artist} duration={data.duration} />
        );
    });
    return (
        <section className={`${styles.chart} ${props.className}`}>
            <h2 className={styles[`chart__title`]}>Top charts</h2>
            {chart}
        </section>
    );
};

export async function loader(data) {
    console.log(data);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd47e98a635msh9b07030890a380cp12d93djsn7491e064d50e',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    const res = await fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=burna%20boy', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
    console.log("res", res);
    const transformedData = res?.result?.songs?.map(data => {
        let minutes = Math.floor(data.duration / 60);
        let seconds = data.duration % 60;
        return {
            title: data.title,
            artist: data.artists[0].name,
            artistId: data.artists[0].artist_id,
            duration: `${minutes}:${seconds > 9 ? seconds : `0${seconds}`}`,
            id: data.id,
            thumbnail: data.thumbnail
        };
    });
    return transformedData;
}
export default TopChart;