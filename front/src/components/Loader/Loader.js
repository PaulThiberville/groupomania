import React from "react";
import logo from "../../images/groupomania.svg";

import style from "./Loader.module.scss";

//This is a loader
export default function Loader() {
  return (
    <div className={style.loader}>
      <img src={logo} alt="loading..." className={style.image} />
    </div>
  );
}
