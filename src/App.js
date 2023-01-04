import { useEffect, useState } from "react";
import UserList from "./Userlist";
import { users } from "./Userlist";
import "./App.css";
let idNum = 1;
function App() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [refresh, setFresh] = useState(0);

  return (
    <div class="Back">
      <input placeholder="이름" onChange={(e) => setNewName(e.target.value)} />
      <input
        placeholder="이메일"
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button
        onClick={() => {
          users.push({
            id: idNum,
            username: newName,
            email: newEmail,
          });
          idNum++;
          console.log(users);
          setFresh(refresh + 1);
        }}
      >
        안녕
      </button>
      <UserList />
    </div>
  );
}

export default App;
