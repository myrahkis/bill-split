import React from "react";
import "./friendList.css";
import './addFriendForm.css';
// import AddFriendForm from "./addFriendForm";

function FriendList({ friendsList, onAdd, selected, onSelect }) {
  function addHandle() {
    onAdd(true);
  }

  return (
    <div className="friend-list-wrapper">
      {friendsList.map((friend) => (
        <Friend
          key={friend.id}
          img={friend.img}
          name={friend.name}
          balance={friend.balance}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
      <div className="float-right">
        <button className="add-btn" onClick={addHandle}>
          Add a friend
        </button>
      </div>
    </div>
  );
}

function Friend({ img, name, balance, selected, onSelect }) {
  function selectHandle() {
    onSelect(!selected);
  }
  return (
    <div className="friend-wrapper">
      <img
        src={img}
        alt="pfp"
        className="pfp"
      />
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
      {
        selected ?
        <button className="close-btn" onClick={selectHandle}>Close</button> :
        <button className="select-btn" onClick={selectHandle}>Select</button>
      }
    </div>
  );
}

export default FriendList;
