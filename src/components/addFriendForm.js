import React, { useState } from "react";
import "./addFriendForm.css";
import "./friendList.css";

function AddFriendForm({ friendsList, onAdd, onClose, showForm }) {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");

  function closeHandle() {
    onClose(false);
  }

  function submitHandle(e) {
    e.preventDefault();

    if (!name || !url) {
      return;
    }

    // https://cdn0.iconfinder.com/data/icons/shift-avatar/32/Jonathan-1024.png
    const newFriend = {
      id: Math.floor(100000 + Math.random() * 900000),
      name: name,
      img: url,
      balance: 0,
    };

    onAdd(friendsList => [...friendsList, newFriend]);

    setName('');
    setURL('');
    showForm(false);

  }

  return (
    <form onSubmit={submitHandle} className="form-wrapper">
      <div className="float-right">
        <button onClick={closeHandle} className="close-btn">
          Close
        </button>
      </div>
      <Input value={name} setter={setName} placeholder="Henry">
        Friend name
      </Input>
      <Input value={url} setter={setURL} placeholder="https://.../name.png">
        Image URL
      </Input>
      <div className="float-right">
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  );
}

function Input({ value, setter, placeholder, children }) {
  function addHandle(e) {
    setter(e.target.value);
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

export { AddFriendForm, Input };
