import "./styles.css";
import { useState } from "react";
export default function App() {
  const [usersDetails, setUserDetails] = useState({
    fname: "",
    lname: ""
  });
  const handleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.clear();
  console.log(usersDetails);

  const handleSubmit = () => {
    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fname: usersDetails.fname,
        lname: usersDetails.lname
      })
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <input
          name="fname"
          value={usersDetails.fname}
          onChange={handleChange}
          type="text"
          placeholder="first Name"
        />
        <input
          name="lname"
          value={usersDetails.lname}
          onChange={handleChange}
          type="text"
          placeholder="last Name"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
