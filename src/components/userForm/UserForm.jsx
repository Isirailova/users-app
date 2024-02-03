import React, { useState } from "react";

const defaultData = {
  id: "",
  name: "",
  email: "",
  phone: "",
  website: "",
};

const UserForm = ({ addUserHandler }) => {
  const [userData, setUserData] = useState(defaultData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUserHandler(userData);
    setUserData(defaultData);
  };

  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={onInputChange}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={onInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={onInputChange}
          />
        </label>
        <label>
          Website:
          <input
            type="url"
            name="website"
            value={userData.website}
            onChange={onInputChange}
          />
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
