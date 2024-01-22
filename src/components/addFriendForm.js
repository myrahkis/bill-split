import React, { useState } from "react";
import "./addFriendForm.css";
import "./friendList.css";

function AddFriendForm({ onClose }) {
  const [name, setName] = useState("");
  const [url, setURL] = useState("");

  function closeHandle() {
    onClose(false);
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form-wrapper">
        <div className="float-right">

      <button onClick={closeHandle} className="close-btn">
        Close
      </button>
        </div>
      <Input value={name} onAdd={setName}>
        Friend name
      </Input>
      <Input value={url} onAdd={setURL}>
        Image URL
      </Input>
      <div className="float-right">
        <button type="submit" onClick={""} className="add-btn">
          Add
        </button>
      </div>
    </form>
  );
}

function Input({ value, onAdd, children }) {
  function addHandle(e) {
    onAdd(e.target.value);
  }

  return (
    <div className="input-wrapper">
      <label>{children}</label>
      <input
        type="text"
        value={value}
        onChange={addHandle}
        className="input"
      ></input>
    </div>
  );
}

export default AddFriendForm;
