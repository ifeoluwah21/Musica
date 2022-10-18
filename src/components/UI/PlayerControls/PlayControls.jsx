import React, { useState } from 'react';
import { BsArrowRepeat, BsFillPlayCircleFill, BsFillSkipEndFill, BsFillSkipStartFill, BsFillVolumeUpFill, BsPauseCircleFill, BsShuffle } from 'react-icons/bs';

import styles from "./PlayControls.module.scss";
import Slider from './Slider';

const PlayControls = (props) => {
    const [isPaused, setIsPaused] = useState(true);
    const onPlayHandler = () => {
        setIsPaused(state => !state);
    };
    return (
        <div className={`${styles.controls} ${props.className}`} >
            <div className={styles[`controls__actions`]}>
                <button className={styles[`controls__btn`]}><BsShuffle className={styles[`controls__shuffle`]} /></button>
                <button className={styles[`controls__btn`]}><BsFillSkipStartFill className={styles[`controls__prev`]} /></button>
                <button className={styles[`controls__btn`]} onClick={onPlayHandler}>{isPaused ? <BsFillPlayCircleFill className={styles[`controls__play`]} /> : <BsPauseCircleFill className={styles[`controls__pause`]} />}</button>
                <button className={styles[`controls__btn`]}><BsFillSkipEndFill className={styles[`controls__next`]} /></button>
                <button className={styles[`controls__btn`]}><BsArrowRepeat className={styles[`controls__repeat`]} /></button>
            </div>
            <Slider className={styles[`controls__play-slider`]} />
            <div className={styles["controls__volume"]}>
                <BsFillVolumeUpFill className={styles["controls__volume-icon"]} />
                <Slider className={styles[`controls__volume-slider`]} />
            </div>
        </div>
    );
};

export default PlayControls;