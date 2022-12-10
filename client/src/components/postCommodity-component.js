import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommodityService from "../services/commodity.service";

const PostCommodityComponent = (props) => {
  const navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;
  let [message, setMessage] = useState("");
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  const handleTakeToLogin = () => {
    navigate("/login");
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const postCommodity = () => {
    CommodityService.postCommodity(name, description, price)
      .then((res) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data);
      });
  };
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login first before seeing posts.</p>
          <button class="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
            Take me to login page.
          </button>
        </div>
      )}

      {currentUser && currentUser.user.role === "seller" && (
        <div className="form-group">
          <label for="exampleforTitle">Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleforTitle"
            onChange={handleChangeName}
          />
          <br />
          <label for="exampleforContent">Description</label>
          <textarea
            className="form-control"
            id="exampleforContent"
            aria-describedby="emailHelp"
            name="description"
            onChange={handleChangeDescription}
          />
          <br />
          <label for="exampleforPrice">Price</label>
          <input
            name="price"
            type="number"
            className="form-control"
            id="exampleforPrice"
            onChange={handleChangePrice}
          />
          <br />

          <button className="btn btn-primary" onClick={postCommodity}>
            Post
          </button>
          <br />
          <br />
          {message && (
            <div className="alert alert-warning" role="alert">
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCommodityComponent;
