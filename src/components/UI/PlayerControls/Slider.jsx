import React, { useState } from 'react';

import styles from "./Slider.module.scss";

const Slider = (props) => {
    const [rangeValue, setRangeValue] = useState(0);
    const onChangeHandler = e => {
        const rangeValue = e.target.value;
        console.log(rangeValue);
        setRangeValue(rangeValue);
    };

    const marginLeft = +rangeValue / 100 * 12 * -1;
    return (
        <div className={`${styles.slider} ${props.className || ``}`}>
            <div className={styles[`slider__progress-bar`]} style={{ width: `${rangeValue}%` }} />
            <div className={styles[`slider__thumb-circle`]} style={{ left: `${rangeValue}%`, marginLeft }}>
                <span className={styles[`slider__thumb-dot`]}></span>
            </div>
            <input onChange={onChangeHandler} type="range" step={"0.01"} className={styles[`slider__range`]} />
        </div>
    );
};

export default Slider;