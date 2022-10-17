import React from 'react';
import LikeIcon from '../UI/Icons/LikeIcon';

import styles from "./TopChartMusicItem.module.scss";



const TopChartMusicItem = (props) => {
    return (
        <article className={styles.music}>
            <img className={styles[`music__cover`]} src={props.cover} alt={props.title} />
            <h3 className={styles[`music__title`]}>{props.title}</h3>
            <p className={styles[`music__author`]}>{props.author}</p>
            <span className={styles[`music__duration`]}>{props.duration}</span>
            <span className={styles[`music__interaction`]}><LikeIcon className={"chart"} /></span>
        </article>
    );
};

export default TopChartMusicItem;