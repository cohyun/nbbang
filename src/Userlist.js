import { useEffect } from "react";
import "./App.css";
function User({ user }) {
  return (
    <div className="UserCard">
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}
const users = [];

function UserList() {
  return (
    <div className="CardBack">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export { users, UserList };

export default UserList;
