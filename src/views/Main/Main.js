import React from "react";
import Clock from "../../components/Clock/Clock";
import Links from "../../components/Links/Links";
import "./Main.scss";

function Main() {
  return (
    <div className="Main">
      <div>메인 부분</div>
      <Clock></Clock>
      <Links></Links>
    </div>
  );
}

export default Main;
