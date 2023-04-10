import React from "react";
import profile from "../profile.jpeg";
import "../index.css";

const Card = ({ searchResult }) => {
  let users = searchResult.map((user) => {
    return (
      <div className="card" key={user.id}>
        <div className="card-img">
          <img src={user.picture} alt="" />
        </div>
        <div className="card-text">
          <p className="card-id">{user.id}</p>
          <div className="card-name">
            <span>{user.title}.</span>
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </div>
        </div>
      </div>
    );
  });

  const content = users?.length ? users : "";
  return (
    <>
      <div className="card-container">{content}</div>
    </>
  );
};

export default Card;
