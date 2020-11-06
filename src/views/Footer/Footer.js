import React from "react";
import Subway from "../../components/Subway/Subway";
import Suggestion from "../../components/Suggestion/Suggestion";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <Subway></Subway>
      하단 부분
      <Suggestion></Suggestion>
    </div>
  );
}

export default Footer;
