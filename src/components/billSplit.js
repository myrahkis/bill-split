import React, { useState } from "react";
import "./billSplit.css";
import "./friendList.css";
import { Input } from "./addFriendForm";

function BillSplit() {
    const [bill, setBill] = useState("");
    const [yourExpense, setYourExpense] = useState('');
    const [friendExpense, setFriendExpense] = useState('');
    const [payer, setPayer] = useState('');

  return (
    <div className="bill-split-wrapper">
      <Input value={bill} setter={setBill} placeholder="150">Bill value</Input>
      <Input value={yourExpense} setter={setYourExpense} placeholder="50">Your expense</Input>
      <Input value={friendExpense} setter={setFriendExpense} placeholder="100">Name's expense</Input>
      <Select value={payer} setter={setPayer} />
      <div className="float-right">
        <button className="select-btn">Split bill</button>
      </div>
    </div>
  );
}

function Select({ value, setter }) {
  return (
    <div className="input-wrapper">
      <label>Who's paying the bill?</label>
      <select value={value} onChange={(e) => setter(e.target.value)} className="select">
        <option value="1">You</option>
        <option value="2">Friend's name</option>
      </select>
    </div>
  );
}

export default BillSplit;
