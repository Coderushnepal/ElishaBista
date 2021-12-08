import React from 'react';

import onlineIcon from '../../components/icons/onlineIcon.png';
import closeIcon from '../../components/icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainery
    ">
      <img className="onlineIcon top" src={onlineIcon} alt="online " />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close " /></a>
    </div>
  </div>
);

export default InfoBar;