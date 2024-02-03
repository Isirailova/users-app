import React from "react";
import PropTypes from "prop-types";

const UserRow = ({ user, onDeleteHandler }) => {
  const { id, name, phone, email, website } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
      <td>
        <button onClick={() => onDeleteHandler(id)}>X</button>
      </td>
    </tr>
  );
};

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserRow;
