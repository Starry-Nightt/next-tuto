import React from "react";

function User({ name, email }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{email}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View more</button>
        </div>
      </div>
    </div>
  );
}

export default User;
