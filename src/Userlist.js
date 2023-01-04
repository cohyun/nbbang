import { useEffect } from "react";
import "./App.css";
function User({ user }) {
  return (
    <div className="UserCard">
      <input className="NameInput" placeholder="이름" />
      <input className="MoneyInput" placeholder="금액 (숫자만 입력)" />
      {/* <b>{user.username}</b> <a>({user.money}원)</a> */}
    </div>
  );
}
const users = [
  {
    id: 1,
    username: "이름",
    money: null,
  },
  {
    id: 2,
    username: "이름",
    money: null,
  },
];

function UserList() {
  return (
    <div className="CardBack">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
      <div className="UserCard">+</div>
    </div>
  );
}

export { users, UserList };

export default UserList;
