import React from 'react';
import avatar1 from "../../../assets/images/avatar-1.png";
import avatar2 from "../../../assets/images/avatar-2.png";
import avatar3 from "../../../assets/images/avatar-3.png";
import avatar4 from "../../../assets/images/avatar-4.png";
import avatar5 from "../../../assets/images/avatar-5.png";
import AvatarItem from './AvatarItem';
import styles from "./AvatarList.module.scss";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const AvatarList = () => {
    const content = avatars.map(avatar => <AvatarItem key={Math.random().toString()} img={avatar} name={avatar} className={styles[`avatars__avatar`]} />);
    return (
        <ul className={styles.avatars}>{content}</ul>
    );
};

export default AvatarList;