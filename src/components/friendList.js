import React from "react";
import './friendList.css';

function FriendList({ img, name, balance }) {
    return (
        <div className="friend-wrapper">
            <img src={img} alt="pfp" />
            <div className="info-wrapper">
                <p>{name}</p>
                <p>{balance}</p>
            </div>
            <button className="select-btn">Select</button>
        </div>
    );
}

export default FriendList;