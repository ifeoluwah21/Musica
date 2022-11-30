import React from "react";

import styles from "./Recents.module.scss";

import hero from "../../assets/images/hero.png";
import AvatarList from "../UI/Avatars/AvatarList";
import LikeIcon from "../UI/Icons/LikeIcon";

const Recents = (props) => {
    return (
        <section className={`${styles.recents} ${props.className}`}>
            <img src={hero} alt="Lead image" />
            <article className={styles[`recents__details`]}>
                <p className={styles[`recents__type`]}>{`Currated Playlist`}</p>
                <h1 className={styles[`recents__title`]}>{`R & B Hits`}</h1>
                <p className={styles[`recents__info`]}>All mine, lie again, Petty call me everybody,<br />
                    Out of time, No love, Bad habit, <br />
                    and so much more.</p>
                <div className={styles[`recents__interaction`]}>
                    <AvatarList />
                    <span><LikeIcon className={`recent`} /> <span>33k Likes</span></span>
                </div>
            </article>
        </section>
    );
};
export default Recents;