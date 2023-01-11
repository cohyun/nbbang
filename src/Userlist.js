import { useEffect, useState } from "react";
import "./App.css";

function User({ user }) {
  const [newName, setnewName] = useState("");
  const [newMoney, setnewMoney] = useState(0);
  const moneyList = [];
  const [refresh, setFresh] = useState(0);
  return (
    <div className="UserCard">
      <div
        onClick={() => {
          onRemove(user.id);
          setFresh(refresh + 1);
        }}
      >
        x
      </div>
      <input
        className="NameInput"
        placeholder="이름"
        onChange={(e) => {
          user.username = e.target.value;
        }}
      />
      <input
        className="MoneyInput"
        placeholder="금액 (숫자만 입력)"
        defaultValue="0"
      />
      <div className="MoneyPlus" onClick={() => {}}>
        +
      </div>
    </div>
  );
}
const users = [
  {
    id: 1,
    username: "이름",
    money: [0],
  },
  {
    id: 2,
    username: "이름",
    money: [0],
  },
];
let idNum = 3;

function UserList() {
  const [refresh, setFresh] = useState(0);

  return (
    <div className="CardBack">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      <div
        className="UserCard"
        onClick={() => {
          users.push({
            id: idNum,
            username: "이름",
            money: [0],
          });
          idNum++;
          setFresh(refresh + 1);
        }}
      >
        +
      </div>
    </div>
  );
}

function onRemove(id) {
  for (let i = 0; i < users.length; i++) {
    if (i < id - 1) {
      users[i] = users[i];
    } else if (i >= id - 1) {
      users[i] = users[i + 1];
    }
  }
  users.pop(users.length);
  console.log(users);
}

export { users, UserList };

export default UserList;
