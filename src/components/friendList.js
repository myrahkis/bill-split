import React from "react";
import "./friendList.css";
import './addFriendForm.css';
// import AddFriendForm from "./addFriendForm";

function FriendList({ friendsList, onAdd, selected, onSelect }) {
  function addHandle() {
    onAdd(true);
    onSelect(null);
  }

  return (
    <div className="friend-list-wrapper">
      {friendsList.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          id={friend.id}
          img={friend.img}
          name={friend.name}
          balance={friend.balance}
          selected={selected}
          onSelect={onSelect}
          onAdd={onAdd}
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

function Friend({ friend, img, name, balance, selected, onSelect, onAdd }) {
  function selectHandle() {
    onSelect(friend);
    onAdd(false);
    // console.log(friend);
  }
  function selectCloseHandle() {
    onSelect(null);
  }

  return (
    <div className={selected === friend ? 'friend-wrapper-selected' : "friend-wrapper"}>
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
        selected === friend ?
        <button className="close-btn" onClick={selectCloseHandle}>Close</button> :
        <button className="select-btn" onClick={selectHandle}>Select</button>
      }
    </div>
  );
}

export default FriendList;
