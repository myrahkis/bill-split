import { useState } from "react";
import "./App.css";
import FriendList from "./components/friendList";
import { AddFriendForm } from "./components/addFriendForm";
import BillSplit from "./components/billSplit";

const friendsInit = [
  {
    id: 123456,
    name: "Judy",
    img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png",
    balance: -10,
  },
  {
    id: 376395,
    name: "Grace",
    img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",
    balance: 0,
  },
  {
    id: 874686,
    name: "Lorenzo",
    img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png",
    balance: 40,
  },
];

function App() {
  const [friends, setFriends] = useState(friendsInit);
  const [showFriendForm, setShowFriendForm] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className="container">
        <FriendList friendsList={friends} onAdd={setShowFriendForm} selected={selected} onSelect={setSelected}/>
      {showFriendForm === true && <AddFriendForm friendsList={friends} onAdd={setFriends} onClose={setShowFriendForm} showForm={setShowFriendForm}/>}
      {selected === true && <BillSplit />}
    </div>
  );
}

export default App;
