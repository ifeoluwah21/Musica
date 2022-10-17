import React from 'react';


const AvatarItem = (props) => {
  return (
    <li className={`${props.className}`}>
      <img src={props.img} alt={props.name} />
    </li>
  );
};

export default AvatarItem;