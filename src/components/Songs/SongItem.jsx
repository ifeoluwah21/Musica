import React from 'react';
import styles from "./SongItem.module.scss";

const SongItem = (props) => {
    console.log(props);
    return (
        <li className={`${styles.song} ${props.className || ``}`}>
            <figure className={styles[`song__card`]}>
                <img className={styles[`song__cover`]} src={props.cover} alt={props.title} />
                <figcaption className={styles[`song__caption`]}>
                    <h3 className={styles[`song__author`]}>{props.author}</h3>
                    <p className={styles[`song__title`]}>{props.title}</p>
                </figcaption>
            </figure>
        </li>
    );
};

export default SongItem;