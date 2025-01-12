import { useState } from "react";

export default function UserName() {
  let [username, setUsername] = useState("timmy");

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        placeholder="username"
        value={username}
      />
      <button>SUBMIT</button>
    </div>
  );
}
