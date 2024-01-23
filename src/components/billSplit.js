import React, { useState } from "react";
import "./billSplit.css";
import "./friendList.css";

function BillSplit({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [friendExpense, setFriendExpense] = useState("");
  const [payer, setPayer] = useState("");

  return (
    <div className="bill-split-wrapper">
      <h3 className="header">Split the bill with {selectedFriend.name}</h3>
      <InputNum value={bill} setter={setBill} placeholder="150">
        Bill value
      </InputNum>
      <InputNum value={yourExpense} setter={setYourExpense} placeholder="50">
        Your expense
      </InputNum>
      <InputNum value={friendExpense} setter={setFriendExpense} placeholder="100">
        {selectedFriend.name}'s expense
      </InputNum>
      <Select value={payer} setter={setPayer} selectedFriend={selectedFriend} />
      <div className="float-right">
        <button className="select-btn">Split bill</button>
      </div>
    </div>
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

function InputNum({ value, setter, placeholder, children }) {
  function addHandle(e) {
    setter(+e.target.value);
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
