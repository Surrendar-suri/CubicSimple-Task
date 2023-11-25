import React, { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  const [userstate, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setState(json);
        console.log(json);
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>s.no</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>City</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {userstate?.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user?.name}</td>
              <td>{user?.username}</td>
              <td>{user?.email}</td>
              <td>{user?.address.city}</td>
              <td>{user?.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

