import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import style from "./App.module.scss";

import Menu from "../Menu/Menu";
import HomeView from "../HomeView/HomeView";
import ProfileView from "../ProfileView/ProfileView";
import Login from "../Login/Login";
import PostView from "../PostView/PostView";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //Find if user exist in localStorage
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      dispatch({
        type: "user/setUser",
        payload: localUser,
      });
    }
  }, []);

  //If no user, render Login
  if (!user) {
    return (
      <div className={style.app}>
        <Login />
      </div>
    );
  }

  //Render app if user found in localStorage
  return (
    <div className={style.app}>
      <Menu />
      <Routes>
        <Route path="/*" element={<HomeView />} />
        <Route path="/profile/:id" element={<ProfileView />} />
        <Route path="/post/:id" element={<PostView />} />
      </Routes>
    </div>
  );
}

export default App;
