import React from "react";
import Clock from "../../components/Clock/Clock";
import Notice from "../../components/Notice/Notice";
import "./Top.scss";

function Top() {
  return (
    <div className="Top">
      <div className="notice__container">
        <Notice></Notice>
      </div>
      <Clock></Clock>
    </div>
  );
}

export default Top;
