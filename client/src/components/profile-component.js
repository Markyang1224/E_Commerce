import React from "react";

const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      <div>
        {!currentUser && (
          <div>You must login first before getting your profile</div>
        )}
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={currentUser.user.username}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Email</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={currentUser.user.email}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Role</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={currentUser.user.role}
          />
        </div>
        <br />
      </div>
    </div>
  );
};

export default ProfileComponent;
