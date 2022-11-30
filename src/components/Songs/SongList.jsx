import React from 'react';
import styles from "./SongList.module.scss";
import SongItem from './SongItem';

const SongList = (props) => {
    return (
        <ul className={styles.list}>
            {props.songs?.map(song => (
                <SongItem className={styles[`list__item`]} key={song.id} {...song} />
            ))}
        </ul>
    );
};

export default SongList;