import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/home-component";
import LoginComponent from "./components/login-component";
import NavComponent from "./components/nav-component";
import PostCommodityComponent from "./components/postCommodity-component";
import ProfileComponent from "./components/profile-component";
import RegisterComponent from "./components/register-component";
import AuthService from "./services/auth.service";

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div>
      <NavComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/register" element={<RegisterComponent />} />
        <Route
          exact
          path="/login"
          element={
            <LoginComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProfileComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          exact
          path="/postCommodity"
          element={
            <PostCommodityComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
