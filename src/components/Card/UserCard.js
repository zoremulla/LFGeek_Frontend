import React from "react";
import { Link } from "react-router-dom";

const UserCard = props => {
  const user = props.user;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <Link to={`/profile/${user.id}`} className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={user.imageUrl}
            alt={user.first_name + " " + user.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{user.first_name + " " + user.last_name}</span>
          </h5>
          <small className="card-text">{user.books.length} books</small>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
