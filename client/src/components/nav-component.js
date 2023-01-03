import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    window.alert("logout success");
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                {!currentUser && (
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                  </div>
                )}
                {!currentUser && (
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </div>
                )}
                {currentUser && (
                  <div>
                    <li className="nav-item">
                      <Link onClick={handleLogout} className="nav-link" to="/">
                        Logout
                      </Link>
                    </li>
                  </div>
                )}
                {currentUser && (
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">
                        Profile
                      </Link>
                    </li>
                  </div>
                )}
                {currentUser && currentUser.user.role === "customer" && (
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link" to="/collection">
                        Collection
                      </Link>
                    </li>
                  </div>
                )}
                {currentUser && currentUser.user.role === "customer" && (
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link" to="/search">
                        Search
                      </Link>
                    </li>
                  </div>
                )}
                {currentUser && currentUser.user.role === "seller" && (
                  <div>
                    <li className="nav-item">
                      <Link className="nav-link" to="/postCommodity">
                        Post Commodity
                      </Link>
                    </li>
                  </div>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default NavComponent;
