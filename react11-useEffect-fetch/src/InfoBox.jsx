import React from "react";

function InfoBox({ user, ...props }) {
  return (
    <div style={props.style}>
      <p>First name : {user.firstName}</p>
      <p>Last name : {user.lastName}</p>
      <p>Gender : {user.gender}</p>
      <img src={user.image} alt="user pic" width={props.size} />
    </div>
  );
}

export default InfoBox;
