import React from "react";
import "./friendList.css";
import AddFriendForm from "./addFriendForm";

const friendsInit = [
  {
    id: 123456,
    name: "Judy",
    img: "icons/judy.png",
    balance: -10,
  },
  {
    id: 376395,
    name: "Grace",
    img: "icons/grace.png",
    balance: 0,
  },
  {
    id: 874686,
    name: "Lorenzo",
    img: "icons/lorenzo.png",
    balance: 40,
  },
];

function FriendList({ onAdd }) {
  function addHandle() {
    onAdd(true);
  }

  return (
    <div className="friend-list-wrapper">
      {friendsInit.map((friend) => (
        <Friend
          key={friend.id}
          img={friend.img}
          name={friend.name}
          balance={friend.balance}
        />
      ))}
      <div className="float-right">
        <button className="add-btn" onClick={addHandle}>Add a friend</button>
      </div>
    </div>
  );
}

function Friend({ img, name, balance }) {
  return (
    <div className="friend-wrapper">
      <img src={img} alt="pfp" className="pfp"/>
      <div className="info-wrapper">
        <h4>{name}</h4>
        <p
          className={
            balance < 0
              ? "balance-red"
              : balance > 0
              ? "balance-green"
              : "balance-even"
          }
        >
          {balance < 0
            ? `You own ${name} $${Math.abs(balance)}`
            : balance > 0
            ? `${name} owns you $${balance}`
            : `You and ${name} are even`}
        </p>
      </div>
      <button className="select-btn">Select</button>
    </div>
  );
}

export default FriendList;
