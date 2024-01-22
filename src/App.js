import { useState } from "react";
import "./App.css";
import FriendList from "./components/friendList";
import AddFriendForm from "./components/addFriendForm";

function App() {
  const [showFriendForm, setShowFriendForm] = useState(false);
  return (
    <div className="container">
        <FriendList onAdd={setShowFriendForm} />
      {showFriendForm === true && <AddFriendForm onClose={setShowFriendForm}/>}
    </div>
  );
}

export default App;
