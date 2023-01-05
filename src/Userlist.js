import { useEffect, useState } from "react";
import "./App.css";

function User({ user }) {
  const [newName, setnewName] = useState("");
  const [newMoney, setnewMoney] = useState(0);
  const moneyList = [];
  return (
    <div className="UserCard">
      <div onClick={() => {}}>x</div>
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

export { users, UserList };

export default UserList;
