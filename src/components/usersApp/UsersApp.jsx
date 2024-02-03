import React, { useEffect, useState } from "react";
import UserRow from "../userRow/UserRow";
import "./usersApp.style.css";
import UserForm from "../userForm/UserForm";
import { v4 as uuidv4 } from "uuid";

const url = "https://jsonplaceholder.typicode.com/users";

const UsersApp = () => {
  const [userList, setUserList] = useState([]);
  const [isUserformOpen, setIsUserFormOpen] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const onDeleteHandler = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  const addUserHandler = (newUser) => {
    setUserList([...userList, { ...newUser, id: uuidv4().slice(0, 3) }]);
    setIsUserFormOpen(false);
  };
  return (
    <div>
      <button onClick={() => setIsUserFormOpen(!isUserformOpen)}>+</button>
      {isUserformOpen ? <UserForm addUserHandler={addUserHandler} /> : null}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((el) => (
            <UserRow key={el.id} user={el} onDeleteHandler={onDeleteHandler} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersApp;
