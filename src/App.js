import "./App.css";
import FriendList from "./components/friendList";

const friendsInit = [
  {
    id: 123456,
    name: "Judy",
    img: "icons/judy.png",
    balance: 0,
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
    balance: 0,
  },
];

function App() {
  return (
    <div className="container">
      <div className="App">
        {friendsInit.map((friend) => (
          <FriendList
            key={friend.id}
            img={friend.img}
            name={friend.name}
            balance={friend.balance}
          />
        ))}
        <div className="float-right">
          <button className="add-btn">Add a friend</button>
        </div>
      </div>
    </div>
  );
}

export default App;
