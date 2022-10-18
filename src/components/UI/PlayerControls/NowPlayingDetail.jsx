import React from 'react';
import cover1 from "../../../assets/images/Rectangle-21.png";

import styles from "./NowPlayingDetail.module.scss";

const NowPlayingDetail = (props) => {
    return (
        <figure className={`${styles.card} ${props.className || ``}`}>
            <img className={styles[`card__cover`]} src={cover1} alt={`music cover`} />
            <figcaption className={styles[`card__detail`]}>
                <h3 className={styles[`card__title`]}>{`Seasons In`}</h3>
                <p className={styles[`card__author`]}>{`James`}</p>
            </figcaption>
        </figure>
    );
};

export default NowPlayingDetail;