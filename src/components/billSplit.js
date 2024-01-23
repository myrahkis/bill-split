import React, { useState } from "react";
import "./billSplit.css";
import "./friendList.css";

function BillSplit({ selectedFriend, friendsList, setFriends, setSelected }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill ? bill - yourExpense : "";
  const [payer, setPayer] = useState("");

  function submitHadle(e) {
    e.preventDefault();

    if (!bill || !yourExpense) return;
    else if (payer === "1") {
      console.log("HAHAHAHAH");

      setFriends((friendsList) =>
        friendsList.map((friend) =>
          friend.id === selectedFriend.id
            ? {
                ...friend,
                balance: friend.balance + friendExpense,
              }
            : friend
        )
      );
    } else if (payer === "2") {
      setFriends((friendsList) =>
        friendsList.map((friend) =>
          friend.id === selectedFriend.id
            ? {
                ...friend,
                balance: friend.balance - yourExpense,
              }
            : friend
        )
      );
    }

    setSelected(null);
  }

  return (
    <form onSubmit={submitHadle}>
      <div className="bill-split-wrapper">
        <h3 className="header">Split the bill with {selectedFriend.name}</h3>
        <InputNum value={bill} setter={setBill} placeholder="150">
          Bill value
        </InputNum>
        <InputNum
          value={yourExpense}
          bill={bill}
          setter={setYourExpense}
          placeholder="50"
        >
          Your expense
        </InputNum>
        <div className="input-wrapper">
          <label>{selectedFriend.name}'s expense</label>
          <input type="text" value={friendExpense} disabled></input>
        </div>
        <Select
          value={payer}
          setter={setPayer}
          selectedFriend={selectedFriend}
        />
        <div className="float-right">
          <button type="submit" className="select-btn">
            Split bill
          </button>
        </div>
      </div>
    </form>
  );
}

function Select({ value, setter, selectedFriend }) {
  return (
    <div className="input-wrapper">
      <label>Who's paying the bill?</label>
      <select
        value={value}
        onChange={(e) => setter(e.target.value)}
        className="select"
      >
        <option value="1">You</option>
        <option value="2">{selectedFriend.name}</option>
      </select>
    </div>
  );
}

function InputNum({ value, bill, setter, placeholder, children }) {
  function addHandle(e) {
    setter(+e.target.value > bill ? value : +e.target.value);
  }

  return (
    <div className="input-wrapper">
      <label>{children}</label>
      <input
        value={value}
        onChange={addHandle}
        placeholder={placeholder}
        className="input"
      ></input>
    </div>
  );
}

export default BillSplit;
