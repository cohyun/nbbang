import { useEffect, useState } from "react";
import UserList from "./Userlist";
import { users } from "./Userlist";
import "./App.css";
let idNum = 1;
function App() {
  return (
    <div class="Back">
      <button
        onClick={() => {
          console.log(users);
        }}
      >
        안녕
      </button>
      <UserList />
    </div>
  );
}

export default App;
