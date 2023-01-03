import React, { useState } from "react";
import CommodityService from "../services/commodity.service";

const SearchComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let [searchInput, setSearchInput] = useState("");
  let [commodityData, setCommodityData] = useState(null);

  const handleInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    CommodityService.SearchByName(searchInput)
      .then((response) => {
        setCommodityData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleAdd = () => {};
  return (
    <div style={{ padding: "3rem" }}>
      <div className="search input-group mb-3">
        <input onChange={handleInput} type="text" class="form-control" />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
      {currentUser && commodityData && (
        <div>
          <p>Data we got back from API.</p>
          {commodityData.map((commodity) => (
            <div
              key={commodity._id}
              className="card"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{commodity.name}</h5>
                <p className="card-text">{commodity.description}</p>
                <p>Price: {commodity.price}</p>
                {/* href="/#" this will not appear warning*/}
                <a onClick={handleAdd} href="/#" className="card-text">
                  Buy
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
